// @flow

import { sortUnits } from './ArcGIS';
import type { LiveSamFeature } from './ArcGIS';

const EIGHT_MILK_ST_UNITS: LiveSamFeature[] = [
  {
    attributes: {
      SAM_ADDRESS_ID: 144552,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '280-300 Washington St',
      STREET_NUMBER: '280-300',
      IS_RANGE: 1,
      RANGE_FROM: '280',
      RANGE_TO: '300',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 280,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775613.03996606194,
      Y_COORD: 2955571.45006047,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058070589976239, y: 42.357398672549351 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 157351,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775643.999998093,
      Y_COORD: 2955390.0000123102,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057959524542142, y: 42.356900329945447 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 157542,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '14 Milk St',
      STREET_NUMBER: '14',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 14,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775670.99999810802,
      Y_COORD: 2955380.0000122902,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303910000',
    },
    geometry: { x: -71.057859823742589, y: 42.356872505751134 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 167687,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '8 Milk St',
      STREET_NUMBER: '8',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 8,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775618.11183805799,
      Y_COORD: 2955375.0492922999,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058055590216526, y: 42.356859672990787 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330944,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St #173',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '173',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330945,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 219',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 219',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330946,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 301',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 301',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330947,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 312',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 312',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330948,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 338',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 338',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330949,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 410',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 410',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330950,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 416',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 416',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330951,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 417',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 417',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330952,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 429',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 429',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330953,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 443',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 443',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330954,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St #5',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '5',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330955,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 652',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 652',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330956,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St Ste 654',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: 'Ste 654',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 330957,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St #7',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '7',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12985402404,
      Y_COORD: 2955527.5378684402,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590317597, y: 42.357278672911676 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 343432,
      RELATIONSHIP_TYPE: 1,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '280-306 Washington St',
      STREET_NUMBER: '280-306',
      IS_RANGE: 1,
      RANGE_FROM: '280',
      RANGE_TO: '306',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 280,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775623.99690994597,
      Y_COORD: 2955531.4989713598,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058030817864363, y: 42.357288890221596 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 351606,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '290 Washington St',
      STREET_NUMBER: '290',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 290,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775783.487102226,
      Y_COORD: 2955539.53530845,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303909000',
    },
    geometry: { x: -71.057440590114197, y: 42.357308672870367 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 352451,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '280 Washington St',
      STREET_NUMBER: '280',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 280,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775783.487102226,
      Y_COORD: 2955539.53530845,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303909000',
    },
    geometry: { x: -71.057440590114197, y: 42.357308672870367 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 352688,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '306 Washington St',
      STREET_NUMBER: '306',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 306,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775783.487102226,
      Y_COORD: 2955539.53530845,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303909000',
    },
    geometry: { x: -71.057440590114197, y: 42.357308672870367 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356675,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St #411',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '411',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12984664901,
      Y_COORD: 2955527.5378545001,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590345166, y: 42.357278672873527 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356676,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St #1010',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '1010',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775643.73397236399,
      Y_COORD: 2955385.7504350599,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057960590243724, y: 42.356888672807052 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356677,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St #1100',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '1100',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775643.73397236399,
      Y_COORD: 2955385.7504350599,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057960590243724, y: 42.356888672807052 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356678,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St #640',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '640',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12984664901,
      Y_COORD: 2955527.5378545001,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590345166, y: 42.357278672873527 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356679,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St #306',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '306',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775643.73397236399,
      Y_COORD: 2955385.7504350599,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057960590243724, y: 42.356888672807052 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356680,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St #332',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '332',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775643.73397236399,
      Y_COORD: 2955385.7504350599,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057960590243724, y: 42.356888672807052 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356681,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St #320',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '320',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775643.73397236399,
      Y_COORD: 2955385.7504350599,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057960590243724, y: 42.356888672807052 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356682,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12984664901,
      Y_COORD: 2955527.5378545001,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590345166, y: 42.357278672873527 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356685,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '288 Washington St',
      STREET_NUMBER: '288',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 288,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775596.91740557703,
      Y_COORD: 2955553.1452079802,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058130590326243, y: 42.357348672889067 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356686,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '292 Washington St',
      STREET_NUMBER: '292',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 292,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775586.18166275299,
      Y_COORD: 2955538.5124326302,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058170590337056, y: 42.357308672880173 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356687,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '300 Washington St',
      STREET_NUMBER: '300',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 300,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775556.67717160296,
      Y_COORD: 2955494.6281343601,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058280590366209, y: 42.357188672853844 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356688,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '296 Washington St',
      STREET_NUMBER: '296',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 296,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775572.76196496305,
      Y_COORD: 2955520.2214706698,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058220590350572, y: 42.357258672869065 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356689,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '298 Washington St',
      STREET_NUMBER: '298',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 298,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775564.71013601206,
      Y_COORD: 2955509.2468973398,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058250590358682, y: 42.357228672862426 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 356690,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '294 Washington St #435',
      STREET_NUMBER: '294',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '435',
      FULL_STREET_NAME: 'Washington St',
      STREET_ID: 4354,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Washington',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 294,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02108',
      X_COORD: 775578.12984664901,
      Y_COORD: 2955527.5378545001,
      SAM_STREET_ID: 4354,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.058200590345166, y: 42.357278672873527 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 357809,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '9 Spring Ln',
      STREET_NUMBER: '9',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '',
      FULL_STREET_NAME: 'Spring Ln',
      STREET_ID: 5244,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Spring',
      STREET_SUFFIX_ABBR: 'Ln',
      STREET_FULL_SUFFIX: 'Lane',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 9,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02109',
      X_COORD: 775650.973658156,
      Y_COORD: 2955553.4253084701,
      SAM_STREET_ID: 5244,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057930590260554, y: 42.357348672895455 },
  },
  {
    attributes: {
      SAM_ADDRESS_ID: 421309,
      RELATIONSHIP_TYPE: 2,
      BUILDING_ID: 136614,
      FULL_ADDRESS: '10 Milk St #337',
      STREET_NUMBER: '10',
      IS_RANGE: 0,
      RANGE_FROM: '',
      RANGE_TO: '',
      UNIT: '337',
      FULL_STREET_NAME: 'Milk St',
      STREET_ID: 2764,
      STREET_PREFIX: ' ',
      STREET_BODY: 'Milk',
      STREET_SUFFIX_ABBR: 'St',
      STREET_FULL_SUFFIX: 'Street',
      STREET_SUFFIX_DIR: ' ',
      STREET_NUMBER_SORT: 10,
      MAILING_NEIGHBORHOOD: 'Boston',
      ZIP_CODE: '02109',
      X_COORD: 775650.973658156,
      Y_COORD: 2955553.4253084701,
      SAM_STREET_ID: 2764,
      WARD: '03',
      PRECINCT_WARD: '0306',
      PARCEL: '0303907000',
    },
    geometry: { x: -71.057930590260554, y: 42.357348672895455 },
  },
];

describe('sortUnits', () => {
  it('sorts by street and number', () => {
    expect(
      sortUnits(EIGHT_MILK_ST_UNITS).map(u => u.attributes.FULL_ADDRESS),
    ).toMatchSnapshot();
  });
});