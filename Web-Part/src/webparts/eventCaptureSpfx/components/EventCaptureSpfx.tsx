import * as React from 'react';
import styles from './EventCaptureSpfx.module.scss';
import type { IEventCaptureSpfxProps } from './IEventCaptureSpfxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class EventCaptureSpfx extends React.Component<IEventCaptureSpfxProps, {}> {
  public render(): React.ReactElement<IEventCaptureSpfxProps> {
    const {
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.eventCaptureSpfx} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Hi, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div><h3>This web part will communicate the events to the AI panel.</h3></div>
        </div>
      </section>
    );
  }
}
