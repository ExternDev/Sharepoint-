import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import * as constants from "../../constants/RemoteEventReceiverConstants";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import * as strings from "EventCaptureSpfxWebPartStrings";
import EventCaptureSpfx from "./components/EventCaptureSpfx";
import { IEventCaptureSpfxProps } from "./components/IEventCaptureSpfxProps";
import { SPHttpClient } from "@microsoft/sp-http";
export interface IEventCaptureSpfxWebPartProps {
  description: string;
}

export default class EventCaptureSpfxWebPart extends BaseClientSideWebPart<IEventCaptureSpfxWebPartProps> {
  private webUrl: string = "";
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";
  private sequenceNumber: number = 15001;
  private synchronization: number = 2;
  private eventTypes = {
    itemAdded: 10001,
    itemUpdated: 10002,
    itemDeleted: 10003,
    itemCheckedIn: 10004,
    itemCheckedOut: 10005,
  };
  public render(): void {
    const element: React.ReactElement<IEventCaptureSpfxProps> =
      React.createElement(EventCaptureSpfx, {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
      });
    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    if (
      this.context.pageContext.web.absoluteUrl == "YoursharepointClient"
    ) {
      this.webUrl = "YoursharepointClientWithSiteName";
    } else {
      this.webUrl = this.context.pageContext.web.absoluteUrl;
    }
    console.log(`this is the web urls :- ${this.webUrl}`);
    this._registerRemoteEventReceiverForAllList();
    return this._getEnvironmentMessage().then((message) => {
      this._environmentMessage = message;
    });
  }
  /*
    Method : _registerRemoteEventReceiverForAllList()
    Params : no parameter
    Returns : void
    Description : _registerRemoteEventReceiverForAllList() method is responsible for getting all list 
                  present on hosted SharePoint site and sending each list name to _registerRemoteEventReceiver(listName:string) method
                  for registering the remote event recieiver 
  */
  private async _registerRemoteEventReceiverForAllList(): Promise<void> {
    try {
      console.log("in the register remote event re");
      var response = await this.context.spHttpClient.get(
        `${this.webUrl}/_api/web/lists`,
        SPHttpClient.configurations.v1,
        {}
      );
      console.log(response);
      response
        .json()
        .then((x) =>
          x.value.map((xy: { Title: any }) =>
            this._registerRemoteEventReceiver(xy.Title)
          )
        );
    } catch (error) {
      console.log(error);
    }
  }
  /*
    Method : _registerRemoteEventReceiver(listName: string)
    @Params : no parameter
    Returns : void
    Description : _registerRemoteEventReceiver(listName: string) method is responsible for getting a list 
                  send by _registerRemoteEventReceiverForAllList() method and checking if the remote event receiver
                  is already registered for particular site if not it calls the _registerRemoteEventReceiverForEventType(listname: string, eventType: number)
                  method for registering the remote event receiver with event type
  */
  private async _registerRemoteEventReceiver(listName: string): Promise<void> {
    try {
      var response = await this.context.spHttpClient.get(
        `${this.webUrl}/_api/web/lists/getbytitle('${listName}')/eventreceivers`,
        SPHttpClient.configurations.v1,
        {}
      );
      var remoteEventreceiverResponse = response
        .json()
        .then((x) =>
          x.value.filter(
            (f: { receiverName: string }) =>
              f.receiverName === constants.ReceiverName
          )
        );
      console.log(remoteEventreceiverResponse);
      if (await remoteEventreceiverResponse.then((x) => x.length === 0)) {
        console.log(`in if with list names ${listName}`);
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemAdded
        ); //add
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemUpdated
        ); //update
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemDeleted
        ); //delete
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemCheckedIn
        ); //checkedIn
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemCheckedOut
        ); //checkedOut
      }
      if (
        await remoteEventreceiverResponse.then((x) =>
          x.some(
            (a: { eventType: number }) =>
              a.eventType !== this.eventTypes.itemAdded
          )
        )
      ) {
        const a = this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemAdded
        );
        console.log(a);
      }
      if (
        await remoteEventreceiverResponse.then((x) =>
          x.some(
            (a: { eventType: number }) =>
              a.eventType !== this.eventTypes.itemUpdated
          )
        )
      ) {
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemUpdated
        );
      }
      if (
        await remoteEventreceiverResponse.then((x) =>
          x.some(
            (a: { eventType: number }) =>
              a.eventType !== this.eventTypes.itemDeleted
          )
        )
      ) {
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemDeleted
        );
      }
      if (
        await remoteEventreceiverResponse.then((x) =>
          x.some((a: { eventType: number }) => this.eventTypes.itemCheckedIn)
        )
      ) {
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemCheckedIn
        );
      }
      if (
        await remoteEventreceiverResponse.then((x) =>
          x.some(
            (a: { eventType: number }) =>
              a.eventType !== this.eventTypes.itemCheckedOut
          )
        )
      ) {
        this._registerRemoteEventReceiverForEventType(
          listName,
          this.eventTypes.itemCheckedOut
        );
      }
    } catch (error) {}
  }

  /*
    Method : _registerRemoteEventReceiverForEventType(listName: string, eventType: number)
    Params : no parameter
    Returns : void
    Description : _registerRemoteEventReceiverForEventType(listName: string, eventType: number) method is responsible for 
                  registering the remote event receiver with list name and eventType
  */
  public async _registerRemoteEventReceiverForEventType(
    listName: string,
    eventType: number
  ): Promise<void> {
    console.log("in rer...........");
    try {
      const eventReceivePayload: any = {
        ReceiverAssembly: constants.ReceiverAssembly,
        ReceiverClass: constants.ReceiverClass,
        ReceiverId: constants.ReceiverId,
        ReceiverName: constants.ReceiverName,
        SequenceNumber: this.sequenceNumber,
        Synchronization: this.synchronization,
        EventType: eventType,
        ReceiverUrl: constants.ReceiverUrl,
      };

      var response = await this.context.spHttpClient.post(
        `${this.webUrl}/_api/web/lists/getbytitle('${listName}')/eventreceivers`,
        SPHttpClient.configurations.v1,
        {
          body: JSON.stringify(eventReceivePayload),
        }
      );
      console.log("the post for RER", response);
      if (response.ok) {
        console.log(
          `The RER is registered for list${listName} for event type ${eventType}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) {
      // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app
        .getContext()
        .then((context) => {
          let environmentMessage: string = "";
          switch (context.app.host.name) {
            case "Office": // running in Office
              environmentMessage = this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentOffice
                : strings.AppOfficeEnvironment;
              break;
            case "Outlook": // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentOutlook
                : strings.AppOutlookEnvironment;
              break;
            case "Teams": // running in Teams
            case "TeamsModern":
              environmentMessage = this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentTeams
                : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }
          return environmentMessage;
        });
    }
    return Promise.resolve(
      this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentSharePoint
        : strings.AppSharePointEnvironment
    );
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }
    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty(
        "--bodyText",
        semanticColors.bodyText || null
      );
      this.domElement.style.setProperty("--link", semanticColors.link || null);
      this.domElement.style.setProperty(
        "--linkHovered",
        semanticColors.linkHovered || null
      );
    }
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
