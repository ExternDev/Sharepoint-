using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.EventReceivers;
using Newtonsoft.Json;
using SharePointAddIn_Event_CaptureWeb.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace SharePointAddIn_Event_CaptureWeb.Services
{
    public class RemoteEventReceiver1 : IRemoteEventService
    {
        /// <summary>
        /// Handles events that occur before an action occurs, such as when a user adds or deletes a list item.
        /// </summary>
        /// <param name="properties">Holds information about the remote event.</param>
        /// <returns>Holds information returned from the remote event.</returns>
        public SPRemoteEventResult ProcessEvent(SPRemoteEventProperties properties)
        {
            switch (properties.EventType)
            {
                case SPRemoteEventType.ItemAdding: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemUpdating: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemDeleting: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemAttachmentAdding: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemAttachmentDeleting: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemCheckingIn: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemCheckingOut: PostDataToEventGrid(properties); break;
                default: break;
            }
           
            SPRemoteEventResult result = new SPRemoteEventResult();

            using (ClientContext clientContext = TokenHelper.CreateRemoteEventReceiverClientContext(properties))
            {
                if (clientContext != null)
                {
                    clientContext.Load(clientContext.Web);
                    clientContext.ExecuteQuery();
                }
            }

            return result;
        }

        /// <summary>
        /// Handles events that occur after an action occurs, such as after a user adds an item to a list or deletes an item from a list.
        /// </summary>
        /// <param name="properties">Holds information about the remote event.</param>
        public void ProcessOneWayEvent(SPRemoteEventProperties properties)
        {
            switch(properties.EventType)
            {
                case SPRemoteEventType.ItemAdded: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemUpdated: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemDeleted: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemAttachmentAdded: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemAttachmentDeleted: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemCheckedIn: PostDataToEventGrid(properties); break;
                case SPRemoteEventType.ItemCheckedOut: PostDataToEventGrid(properties); break;
                default: break;
            }
        }

        private async void PostDataToEventGrid(SPRemoteEventProperties properties)
        {
            using (HttpClient client = new HttpClient())
            {
                // Set the base URL of the API
                client.BaseAddress = new Uri("https://kbly-event-grid.eastus-1.eventgrid.azure.net/api/events");

                // Add custom headers
                client.DefaultRequestHeaders.Add("aeg-sas-key", "KQcZJcLpyILE+PW5CzLgPeqm9LtBYA+fZssuS2W1jSg=");

                // Create the data you want to send as an HTTP content object
                var dataToSend = new List<EventGridModel>()
                {
                    new EventGridModel
                    {
                        subject = "/kinberly/WebSocket/Server",
                        eventType = "Kinsmen.AI",
                        eventTime = "2023-09-27T18:41:00.9584103Z",
                        id = "831e1650-001e-001b-66ab-eeb76e069632",
                        data = new EventModel
                        {
                            EventName = properties.EventType.ToString(),
                            EventType = properties.EventType,
                            Properties = properties
                        }
                    }
                };

                string json = JsonConvert.SerializeObject(dataToSend);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                // Send the POST request
                HttpResponseMessage response = await client.PostAsync("", content);

                // Check the response status code
                if (response.IsSuccessStatusCode)
                {
                    string responseContent = await response.Content.ReadAsStringAsync();
                    Console.WriteLine($"Response: {responseContent}");
                }
                else
                {
                    Console.WriteLine($"HTTP Error: {response.StatusCode}");
                }
            }
        }      
    }
}
