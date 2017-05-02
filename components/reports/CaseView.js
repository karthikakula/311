// @flow

import React from 'react';
import { css } from 'glamor';

import type { Request } from '../../data/types';
import type { AppStore } from '../../data/store';

import SectionHeader from '../common/SectionHeader';
import waypoints, { WAYPOINT_BASE_OPTIONS } from '../map/WaypointMarkers';

export type Props = {|
  request: Request,
  store: AppStore,
|}

const CONTAINER_STYLE = css({
  maxWidth: 960,
  margin: '40px auto',
});

const IMG_STYLE = css({
  display: 'block',
  width: '100%',
  minHeight: 300,
});

const MAP_WRAPPER_STYLE = css({
  position: 'relative',
});

const WAYPOINT_STYLE = css({
  position: 'absolute',
  width: WAYPOINT_BASE_OPTIONS.iconSize.x,
  height: WAYPOINT_BASE_OPTIONS.iconSize.y,
  top: '50%',
  left: '50%',
  transform: `translate(${-WAYPOINT_BASE_OPTIONS.iconAnchor.x}px, ${-WAYPOINT_BASE_OPTIONS.iconAnchor.y}px)`,
});

function renderStatus({ status, statusNotes, updatedAtString }: Request) {
  if (status !== 'closed') {
    return null;
  }

  return (
    <div className="b b--g p-a500 m-v500">
      <div className="txt-l" style={{ marginTop: 0 }}>Resolution — {updatedAtString}</div>
      <div className="t--intro">{statusNotes}</div>
    </div>
  );
}

function makeMapboxUrl(store: AppStore, request: Request, size: number): string {
  const { apiKeys: { mapbox } } = store;
  const { location } = request;

  if (!location) {
    return '';
  }

  return `https://api.mapbox.com/styles/v1/${mapbox.stylePath}/static/${location.lng},${location.lat},15/${size}x${size}@2x?attribution=false&logo=false&access_token=${encodeURIComponent(mapbox.accessToken)}`;
}

export default function CaseView({ request, store }: Props) {
  const waypointIcon = request.status === 'open' ? waypoints.greenFilled : waypoints.orangeFilled;

  return (
    <div className={CONTAINER_STYLE}>
      <SectionHeader subtitle={`Case no: #${request.id}`}>{request.service.name}</SectionHeader>

      <div className="">
        <div className="m-v300 t--info">
          {request.requestedAtString} {request.address && ` — ${request.address}`}
        </div>

        { renderStatus(request) }

        { request.description &&
          <div className="p-a500" style={{ paddingTop: 0 }}>
            <div className="txt-l">Description</div>
            <div className="t--intro">{request.description}</div>
          </div>
        }

        <div className="g p-a500" style={{ paddingTop: 0 }}>
          { request.location &&
            <div className="g--6">
              <div className={MAP_WRAPPER_STYLE}>
                <img className={`${IMG_STYLE.toString()} m-v300 br br-a150`} src={makeMapboxUrl(store, request, 440)} alt={`Map of ${request.address || ''}`} />
                <div className={`${WAYPOINT_STYLE.toString()} ${waypointIcon.className || ''}`} />
              </div>
            </div>
          }

          <div className="g--6">
            { request.mediaUrl && <a href={request.mediaUrl} target="_blank" rel="noopener noreferrer"><img className={`${IMG_STYLE.toString()} m-v300 br br-a150`} alt="Submission" src={request.mediaUrl} /></a> }
          </div>
        </div>
      </div>
    </div>
  );
}