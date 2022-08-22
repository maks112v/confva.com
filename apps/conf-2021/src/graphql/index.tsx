import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageSpeaker: Array<Speaker>;
  imagesSeoSlice: Array<SeoSlice>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoNavbarMatter: Array<NavbarMatter>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetImageSpeakerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpeakerWhereInput>;
};


/** Asset system model */
export type AssetImagesSeoSliceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SeoSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SeoSliceWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoNavbarMatterArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<NavbarMatterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavbarMatterWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  imageSpeaker?: Maybe<SpeakerCreateManyInlineInput>;
  imagesSeoSlice?: Maybe<SeoSliceCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  logoNavbarMatter?: Maybe<NavbarMatterCreateManyInlineInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  imageSpeaker_every?: Maybe<SpeakerWhereInput>;
  imageSpeaker_none?: Maybe<SpeakerWhereInput>;
  imageSpeaker_some?: Maybe<SpeakerWhereInput>;
  imagesSeoSlice_every?: Maybe<SeoSliceWhereInput>;
  imagesSeoSlice_none?: Maybe<SeoSliceWhereInput>;
  imagesSeoSlice_some?: Maybe<SeoSliceWhereInput>;
  logoNavbarMatter_every?: Maybe<NavbarMatterWhereInput>;
  logoNavbarMatter_none?: Maybe<NavbarMatterWhereInput>;
  logoNavbarMatter_some?: Maybe<NavbarMatterWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  imageSpeaker?: Maybe<SpeakerUpdateManyInlineInput>;
  imagesSeoSlice?: Maybe<SeoSliceUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  logoNavbarMatter?: Maybe<NavbarMatterUpdateManyInlineInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  imageSpeaker_every?: Maybe<SpeakerWhereInput>;
  imageSpeaker_none?: Maybe<SpeakerWhereInput>;
  imageSpeaker_some?: Maybe<SpeakerWhereInput>;
  imagesSeoSlice_every?: Maybe<SeoSliceWhereInput>;
  imagesSeoSlice_none?: Maybe<SeoSliceWhereInput>;
  imagesSeoSlice_some?: Maybe<SeoSliceWhereInput>;
  logoNavbarMatter_every?: Maybe<NavbarMatterWhereInput>;
  logoNavbarMatter_none?: Maybe<NavbarMatterWhereInput>;
  logoNavbarMatter_some?: Maybe<NavbarMatterWhereInput>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Event = Node & {
  __typename?: 'Event';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Event>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** List of Event versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  maybe?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  startTime?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EventCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type EventPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type EventScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type EventUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type EventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventCreateInput = {
  ckv5qd5q93www01zd68ayb8af?: Maybe<ScheduleSliceCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  maybe?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EventCreateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventWhereUniqueInput>>;
  /** Create and connect multiple existing Event documents */
  create?: Maybe<Array<EventCreateInput>>;
};

export type EventCreateOneInlineInput = {
  /** Connect one existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Event;
};

/** Identifies documents */
export type EventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  endTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  endTime_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  endTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  endTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  endTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  endTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  endTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  maybe?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  maybe_not?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  startTime?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startTime_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  startTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum EventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MaybeAsc = 'maybe_ASC',
  MaybeDesc = 'maybe_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventUpdateInput = {
  ckv5qd5q93www01zd68ayb8af?: Maybe<ScheduleSliceUpdateManyInlineInput>;
  endTime?: Maybe<Scalars['DateTime']>;
  maybe?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EventUpdateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventConnectInput>>;
  /** Create and connect multiple Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Delete multiple Event documents */
  delete?: Maybe<Array<EventWhereUniqueInput>>;
  /** Disconnect multiple Event documents */
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Event documents */
  set?: Maybe<Array<EventWhereUniqueInput>>;
  /** Update multiple Event documents */
  update?: Maybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Event documents */
  upsert?: Maybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
};

export type EventUpdateManyInput = {
  endTime?: Maybe<Scalars['DateTime']>;
  maybe?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventUpdateManyInput;
  /** Document search */
  where: EventWhereInput;
};

export type EventUpdateOneInlineInput = {
  /** Connect existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Delete currently connected Event document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Event document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Event document */
  update?: Maybe<EventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Event document */
  upsert?: Maybe<EventUpsertWithNestedWhereUniqueInput>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventUpdateInput;
  /** Unique document search */
  where: EventWhereUniqueInput;
};

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput;
  /** Update document if it exists */
  update: EventUpdateInput;
};

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventUpsertInput;
  /** Unique document search */
  where: EventWhereUniqueInput;
};

/** Identifies documents */
export type EventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  endTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  endTime_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  endTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  endTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  endTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  endTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  endTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  maybe?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  maybe_not?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  startTime?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startTime_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startTime_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startTime_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startTime_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startTime_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startTime_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  startTime_not_in?: Maybe<Array<Scalars['DateTime']>>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type HeroSlice = Node & {
  __typename?: 'HeroSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<HeroSlice>;
  /** List of HeroSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HeroSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HeroSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HeroSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type HeroSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type HeroSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HeroSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type HeroSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type HeroSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroSliceConnection = {
  __typename?: 'HeroSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  pages?: Maybe<PageCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeroSliceCreateManyInlineInput = {
  /** Connect multiple existing HeroSlice documents */
  connect?: Maybe<Array<HeroSliceWhereUniqueInput>>;
  /** Create and connect multiple existing HeroSlice documents */
  create?: Maybe<Array<HeroSliceCreateInput>>;
};

export type HeroSliceCreateOneInlineInput = {
  /** Connect one existing HeroSlice document */
  connect?: Maybe<HeroSliceWhereUniqueInput>;
  /** Create and connect one HeroSlice document */
  create?: Maybe<HeroSliceCreateInput>;
};

/** An edge in a connection. */
export type HeroSliceEdge = {
  __typename?: 'HeroSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HeroSlice;
};

/** Identifies documents */
export type HeroSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeroSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeroSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeroSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum HeroSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HeroSliceUpdateInput = {
  pages?: Maybe<PageUpdateManyInlineInput>;
};

export type HeroSliceUpdateManyInlineInput = {
  /** Connect multiple existing HeroSlice documents */
  connect?: Maybe<Array<HeroSliceConnectInput>>;
  /** Create and connect multiple HeroSlice documents */
  create?: Maybe<Array<HeroSliceCreateInput>>;
  /** Delete multiple HeroSlice documents */
  delete?: Maybe<Array<HeroSliceWhereUniqueInput>>;
  /** Disconnect multiple HeroSlice documents */
  disconnect?: Maybe<Array<HeroSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroSlice documents */
  set?: Maybe<Array<HeroSliceWhereUniqueInput>>;
  /** Update multiple HeroSlice documents */
  update?: Maybe<Array<HeroSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroSlice documents */
  upsert?: Maybe<Array<HeroSliceUpsertWithNestedWhereUniqueInput>>;
};

export type HeroSliceUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type HeroSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroSliceUpdateManyInput;
  /** Document search */
  where: HeroSliceWhereInput;
};

export type HeroSliceUpdateOneInlineInput = {
  /** Connect existing HeroSlice document */
  connect?: Maybe<HeroSliceWhereUniqueInput>;
  /** Create and connect one HeroSlice document */
  create?: Maybe<HeroSliceCreateInput>;
  /** Delete currently connected HeroSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected HeroSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single HeroSlice document */
  update?: Maybe<HeroSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroSlice document */
  upsert?: Maybe<HeroSliceUpsertWithNestedWhereUniqueInput>;
};

export type HeroSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroSliceUpdateInput;
  /** Unique document search */
  where: HeroSliceWhereUniqueInput;
};

export type HeroSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroSliceCreateInput;
  /** Update document if it exists */
  update: HeroSliceUpdateInput;
};

export type HeroSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroSliceUpsertInput;
  /** Unique document search */
  where: HeroSliceWhereUniqueInput;
};

/** Identifies documents */
export type HeroSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HeroSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HeroSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HeroSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References HeroSlice record uniquely */
export type HeroSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type LiveSlice = Node & {
  __typename?: 'LiveSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<LiveSlice>;
  embed?: Maybe<Scalars['String']>;
  /** List of LiveSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type LiveSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type LiveSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LiveSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type LiveSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type LiveSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type LiveSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type LiveSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type LiveSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: LiveSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type LiveSliceConnection = {
  __typename?: 'LiveSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LiveSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LiveSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  embed?: Maybe<Scalars['String']>;
  pages?: Maybe<PageCreateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LiveSliceCreateManyInlineInput = {
  /** Connect multiple existing LiveSlice documents */
  connect?: Maybe<Array<LiveSliceWhereUniqueInput>>;
  /** Create and connect multiple existing LiveSlice documents */
  create?: Maybe<Array<LiveSliceCreateInput>>;
};

export type LiveSliceCreateOneInlineInput = {
  /** Connect one existing LiveSlice document */
  connect?: Maybe<LiveSliceWhereUniqueInput>;
  /** Create and connect one LiveSlice document */
  create?: Maybe<LiveSliceCreateInput>;
};

/** An edge in a connection. */
export type LiveSliceEdge = {
  __typename?: 'LiveSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LiveSlice;
};

/** Identifies documents */
export type LiveSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LiveSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LiveSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LiveSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  embed?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  embed_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  embed_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  embed_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  embed_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  embed_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  embed_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  embed_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  embed_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  embed_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum LiveSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmbedAsc = 'embed_ASC',
  EmbedDesc = 'embed_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LiveSliceUpdateInput = {
  embed?: Maybe<Scalars['String']>;
  pages?: Maybe<PageUpdateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type LiveSliceUpdateManyInlineInput = {
  /** Connect multiple existing LiveSlice documents */
  connect?: Maybe<Array<LiveSliceConnectInput>>;
  /** Create and connect multiple LiveSlice documents */
  create?: Maybe<Array<LiveSliceCreateInput>>;
  /** Delete multiple LiveSlice documents */
  delete?: Maybe<Array<LiveSliceWhereUniqueInput>>;
  /** Disconnect multiple LiveSlice documents */
  disconnect?: Maybe<Array<LiveSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LiveSlice documents */
  set?: Maybe<Array<LiveSliceWhereUniqueInput>>;
  /** Update multiple LiveSlice documents */
  update?: Maybe<Array<LiveSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LiveSlice documents */
  upsert?: Maybe<Array<LiveSliceUpsertWithNestedWhereUniqueInput>>;
};

export type LiveSliceUpdateManyInput = {
  embed?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LiveSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LiveSliceUpdateManyInput;
  /** Document search */
  where: LiveSliceWhereInput;
};

export type LiveSliceUpdateOneInlineInput = {
  /** Connect existing LiveSlice document */
  connect?: Maybe<LiveSliceWhereUniqueInput>;
  /** Create and connect one LiveSlice document */
  create?: Maybe<LiveSliceCreateInput>;
  /** Delete currently connected LiveSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected LiveSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single LiveSlice document */
  update?: Maybe<LiveSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LiveSlice document */
  upsert?: Maybe<LiveSliceUpsertWithNestedWhereUniqueInput>;
};

export type LiveSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LiveSliceUpdateInput;
  /** Unique document search */
  where: LiveSliceWhereUniqueInput;
};

export type LiveSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: LiveSliceCreateInput;
  /** Update document if it exists */
  update: LiveSliceUpdateInput;
};

export type LiveSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LiveSliceUpsertInput;
  /** Unique document search */
  where: LiveSliceWhereUniqueInput;
};

/** Identifies documents */
export type LiveSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LiveSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LiveSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LiveSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  embed?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  embed_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  embed_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  embed_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  embed_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  embed_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  embed_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  embed_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  embed_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  embed_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References LiveSlice record uniquely */
export type LiveSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one event */
  createEvent?: Maybe<Event>;
  /** Create one heroSlice */
  createHeroSlice?: Maybe<HeroSlice>;
  /** Create one liveSlice */
  createLiveSlice?: Maybe<LiveSlice>;
  /** Create one navbarMatter */
  createNavbarMatter?: Maybe<NavbarMatter>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one questionSlice */
  createQuestionSlice?: Maybe<QuestionSlice>;
  /** Create one scheduleSlice */
  createScheduleSlice?: Maybe<ScheduleSlice>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one seoSlice */
  createSeoSlice?: Maybe<SeoSlice>;
  /** Create one spacerAtom */
  createSpacerAtom?: Maybe<SpacerAtom>;
  /** Create one speaker */
  createSpeaker?: Maybe<Speaker>;
  /** Create one speakersSlice */
  createSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Create one themeSlice */
  createThemeSlice?: Maybe<ThemeSlice>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>;
  /** Delete one heroSlice from _all_ existing stages. Returns deleted document. */
  deleteHeroSlice?: Maybe<HeroSlice>;
  /** Delete one liveSlice from _all_ existing stages. Returns deleted document. */
  deleteLiveSlice?: Maybe<LiveSlice>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload;
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection;
  /**
   * Delete many HeroSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManyHeroSlicesConnection)
   */
  deleteManyHeroSlices: BatchPayload;
  /** Delete many HeroSlice documents, return deleted documents */
  deleteManyHeroSlicesConnection: HeroSliceConnection;
  /**
   * Delete many LiveSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManyLiveSlicesConnection)
   */
  deleteManyLiveSlices: BatchPayload;
  /** Delete many LiveSlice documents, return deleted documents */
  deleteManyLiveSlicesConnection: LiveSliceConnection;
  /**
   * Delete many NavbarMatter documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavbarMattersConnection)
   */
  deleteManyNavbarMatters: BatchPayload;
  /** Delete many NavbarMatter documents, return deleted documents */
  deleteManyNavbarMattersConnection: NavbarMatterConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many QuestionSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManyQuestionSlicesConnection)
   */
  deleteManyQuestionSlices: BatchPayload;
  /** Delete many QuestionSlice documents, return deleted documents */
  deleteManyQuestionSlicesConnection: QuestionSliceConnection;
  /**
   * Delete many ScheduleSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManyScheduleSlicesConnection)
   */
  deleteManyScheduleSlices: BatchPayload;
  /** Delete many ScheduleSlice documents, return deleted documents */
  deleteManyScheduleSlicesConnection: ScheduleSliceConnection;
  /**
   * Delete many SeoSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManySeoSlicesConnection)
   */
  deleteManySeoSlices: BatchPayload;
  /** Delete many SeoSlice documents, return deleted documents */
  deleteManySeoSlicesConnection: SeoSliceConnection;
  /**
   * Delete many SpacerAtom documents
   * @deprecated Please use the new paginated many mutation (deleteManySpacerAtomsConnection)
   */
  deleteManySpacerAtoms: BatchPayload;
  /** Delete many SpacerAtom documents, return deleted documents */
  deleteManySpacerAtomsConnection: SpacerAtomConnection;
  /**
   * Delete many Speaker documents
   * @deprecated Please use the new paginated many mutation (deleteManySpeakersConnection)
   */
  deleteManySpeakers: BatchPayload;
  /** Delete many Speaker documents, return deleted documents */
  deleteManySpeakersConnection: SpeakerConnection;
  /**
   * Delete many SpeakersSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManySpeakersSlicesConnection)
   */
  deleteManySpeakersSlices: BatchPayload;
  /** Delete many SpeakersSlice documents, return deleted documents */
  deleteManySpeakersSlicesConnection: SpeakersSliceConnection;
  /**
   * Delete many ThemeSlice documents
   * @deprecated Please use the new paginated many mutation (deleteManyThemesSliceConnection)
   */
  deleteManyThemesSlice: BatchPayload;
  /** Delete many ThemeSlice documents, return deleted documents */
  deleteManyThemesSliceConnection: ThemeSliceConnection;
  /** Delete one navbarMatter from _all_ existing stages. Returns deleted document. */
  deleteNavbarMatter?: Maybe<NavbarMatter>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one questionSlice from _all_ existing stages. Returns deleted document. */
  deleteQuestionSlice?: Maybe<QuestionSlice>;
  /** Delete one scheduleSlice from _all_ existing stages. Returns deleted document. */
  deleteScheduleSlice?: Maybe<ScheduleSlice>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one seoSlice from _all_ existing stages. Returns deleted document. */
  deleteSeoSlice?: Maybe<SeoSlice>;
  /** Delete one spacerAtom from _all_ existing stages. Returns deleted document. */
  deleteSpacerAtom?: Maybe<SpacerAtom>;
  /** Delete one speaker from _all_ existing stages. Returns deleted document. */
  deleteSpeaker?: Maybe<Speaker>;
  /** Delete one speakersSlice from _all_ existing stages. Returns deleted document. */
  deleteSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Delete one themeSlice from _all_ existing stages. Returns deleted document. */
  deleteThemeSlice?: Maybe<ThemeSlice>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one event */
  publishEvent?: Maybe<Event>;
  /** Publish one heroSlice */
  publishHeroSlice?: Maybe<HeroSlice>;
  /** Publish one liveSlice */
  publishLiveSlice?: Maybe<LiveSlice>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload;
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection;
  /**
   * Publish many HeroSlice documents
   * @deprecated Please use the new paginated many mutation (publishManyHeroSlicesConnection)
   */
  publishManyHeroSlices: BatchPayload;
  /** Publish many HeroSlice documents */
  publishManyHeroSlicesConnection: HeroSliceConnection;
  /**
   * Publish many LiveSlice documents
   * @deprecated Please use the new paginated many mutation (publishManyLiveSlicesConnection)
   */
  publishManyLiveSlices: BatchPayload;
  /** Publish many LiveSlice documents */
  publishManyLiveSlicesConnection: LiveSliceConnection;
  /**
   * Publish many NavbarMatter documents
   * @deprecated Please use the new paginated many mutation (publishManyNavbarMattersConnection)
   */
  publishManyNavbarMatters: BatchPayload;
  /** Publish many NavbarMatter documents */
  publishManyNavbarMattersConnection: NavbarMatterConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many QuestionSlice documents
   * @deprecated Please use the new paginated many mutation (publishManyQuestionSlicesConnection)
   */
  publishManyQuestionSlices: BatchPayload;
  /** Publish many QuestionSlice documents */
  publishManyQuestionSlicesConnection: QuestionSliceConnection;
  /**
   * Publish many ScheduleSlice documents
   * @deprecated Please use the new paginated many mutation (publishManyScheduleSlicesConnection)
   */
  publishManyScheduleSlices: BatchPayload;
  /** Publish many ScheduleSlice documents */
  publishManyScheduleSlicesConnection: ScheduleSliceConnection;
  /**
   * Publish many SeoSlice documents
   * @deprecated Please use the new paginated many mutation (publishManySeoSlicesConnection)
   */
  publishManySeoSlices: BatchPayload;
  /** Publish many SeoSlice documents */
  publishManySeoSlicesConnection: SeoSliceConnection;
  /**
   * Publish many SpacerAtom documents
   * @deprecated Please use the new paginated many mutation (publishManySpacerAtomsConnection)
   */
  publishManySpacerAtoms: BatchPayload;
  /** Publish many SpacerAtom documents */
  publishManySpacerAtomsConnection: SpacerAtomConnection;
  /**
   * Publish many Speaker documents
   * @deprecated Please use the new paginated many mutation (publishManySpeakersConnection)
   */
  publishManySpeakers: BatchPayload;
  /** Publish many Speaker documents */
  publishManySpeakersConnection: SpeakerConnection;
  /**
   * Publish many SpeakersSlice documents
   * @deprecated Please use the new paginated many mutation (publishManySpeakersSlicesConnection)
   */
  publishManySpeakersSlices: BatchPayload;
  /** Publish many SpeakersSlice documents */
  publishManySpeakersSlicesConnection: SpeakersSliceConnection;
  /**
   * Publish many ThemeSlice documents
   * @deprecated Please use the new paginated many mutation (publishManyThemesSliceConnection)
   */
  publishManyThemesSlice: BatchPayload;
  /** Publish many ThemeSlice documents */
  publishManyThemesSliceConnection: ThemeSliceConnection;
  /** Publish one navbarMatter */
  publishNavbarMatter?: Maybe<NavbarMatter>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one questionSlice */
  publishQuestionSlice?: Maybe<QuestionSlice>;
  /** Publish one scheduleSlice */
  publishScheduleSlice?: Maybe<ScheduleSlice>;
  /** Publish one seoSlice */
  publishSeoSlice?: Maybe<SeoSlice>;
  /** Publish one spacerAtom */
  publishSpacerAtom?: Maybe<SpacerAtom>;
  /** Publish one speaker */
  publishSpeaker?: Maybe<Speaker>;
  /** Publish one speakersSlice */
  publishSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Publish one themeSlice */
  publishThemeSlice?: Maybe<ThemeSlice>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one event */
  schedulePublishEvent?: Maybe<Event>;
  /** Schedule to publish one heroSlice */
  schedulePublishHeroSlice?: Maybe<HeroSlice>;
  /** Schedule to publish one liveSlice */
  schedulePublishLiveSlice?: Maybe<LiveSlice>;
  /** Schedule to publish one navbarMatter */
  schedulePublishNavbarMatter?: Maybe<NavbarMatter>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one questionSlice */
  schedulePublishQuestionSlice?: Maybe<QuestionSlice>;
  /** Schedule to publish one scheduleSlice */
  schedulePublishScheduleSlice?: Maybe<ScheduleSlice>;
  /** Schedule to publish one seoSlice */
  schedulePublishSeoSlice?: Maybe<SeoSlice>;
  /** Schedule to publish one spacerAtom */
  schedulePublishSpacerAtom?: Maybe<SpacerAtom>;
  /** Schedule to publish one speaker */
  schedulePublishSpeaker?: Maybe<Speaker>;
  /** Schedule to publish one speakersSlice */
  schedulePublishSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Schedule to publish one themeSlice */
  schedulePublishThemeSlice?: Maybe<ThemeSlice>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEvent?: Maybe<Event>;
  /** Unpublish one heroSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHeroSlice?: Maybe<HeroSlice>;
  /** Unpublish one liveSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLiveSlice?: Maybe<LiveSlice>;
  /** Unpublish one navbarMatter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavbarMatter?: Maybe<NavbarMatter>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one questionSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishQuestionSlice?: Maybe<QuestionSlice>;
  /** Unpublish one scheduleSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishScheduleSlice?: Maybe<ScheduleSlice>;
  /** Unpublish one seoSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSeoSlice?: Maybe<SeoSlice>;
  /** Unpublish one spacerAtom from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSpacerAtom?: Maybe<SpacerAtom>;
  /** Unpublish one speaker from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSpeaker?: Maybe<Speaker>;
  /** Unpublish one speakersSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Unpublish one themeSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishThemeSlice?: Maybe<ThemeSlice>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>;
  /** Unpublish one heroSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHeroSlice?: Maybe<HeroSlice>;
  /** Unpublish one liveSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLiveSlice?: Maybe<LiveSlice>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload;
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection;
  /**
   * Unpublish many HeroSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHeroSlicesConnection)
   */
  unpublishManyHeroSlices: BatchPayload;
  /** Find many HeroSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHeroSlicesConnection: HeroSliceConnection;
  /**
   * Unpublish many LiveSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLiveSlicesConnection)
   */
  unpublishManyLiveSlices: BatchPayload;
  /** Find many LiveSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLiveSlicesConnection: LiveSliceConnection;
  /**
   * Unpublish many NavbarMatter documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavbarMattersConnection)
   */
  unpublishManyNavbarMatters: BatchPayload;
  /** Find many NavbarMatter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavbarMattersConnection: NavbarMatterConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many QuestionSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManyQuestionSlicesConnection)
   */
  unpublishManyQuestionSlices: BatchPayload;
  /** Find many QuestionSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyQuestionSlicesConnection: QuestionSliceConnection;
  /**
   * Unpublish many ScheduleSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManyScheduleSlicesConnection)
   */
  unpublishManyScheduleSlices: BatchPayload;
  /** Find many ScheduleSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyScheduleSlicesConnection: ScheduleSliceConnection;
  /**
   * Unpublish many SeoSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManySeoSlicesConnection)
   */
  unpublishManySeoSlices: BatchPayload;
  /** Find many SeoSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySeoSlicesConnection: SeoSliceConnection;
  /**
   * Unpublish many SpacerAtom documents
   * @deprecated Please use the new paginated many mutation (unpublishManySpacerAtomsConnection)
   */
  unpublishManySpacerAtoms: BatchPayload;
  /** Find many SpacerAtom documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySpacerAtomsConnection: SpacerAtomConnection;
  /**
   * Unpublish many Speaker documents
   * @deprecated Please use the new paginated many mutation (unpublishManySpeakersConnection)
   */
  unpublishManySpeakers: BatchPayload;
  /** Find many Speaker documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySpeakersConnection: SpeakerConnection;
  /**
   * Unpublish many SpeakersSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManySpeakersSlicesConnection)
   */
  unpublishManySpeakersSlices: BatchPayload;
  /** Find many SpeakersSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySpeakersSlicesConnection: SpeakersSliceConnection;
  /**
   * Unpublish many ThemeSlice documents
   * @deprecated Please use the new paginated many mutation (unpublishManyThemesSliceConnection)
   */
  unpublishManyThemesSlice: BatchPayload;
  /** Find many ThemeSlice documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyThemesSliceConnection: ThemeSliceConnection;
  /** Unpublish one navbarMatter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavbarMatter?: Maybe<NavbarMatter>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one questionSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishQuestionSlice?: Maybe<QuestionSlice>;
  /** Unpublish one scheduleSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishScheduleSlice?: Maybe<ScheduleSlice>;
  /** Unpublish one seoSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSeoSlice?: Maybe<SeoSlice>;
  /** Unpublish one spacerAtom from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSpacerAtom?: Maybe<SpacerAtom>;
  /** Unpublish one speaker from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSpeaker?: Maybe<Speaker>;
  /** Unpublish one speakersSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Unpublish one themeSlice from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishThemeSlice?: Maybe<ThemeSlice>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one event */
  updateEvent?: Maybe<Event>;
  /** Update one heroSlice */
  updateHeroSlice?: Maybe<HeroSlice>;
  /** Update one liveSlice */
  updateLiveSlice?: Maybe<LiveSlice>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload;
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection;
  /**
   * Update many heroSlices
   * @deprecated Please use the new paginated many mutation (updateManyHeroSlicesConnection)
   */
  updateManyHeroSlices: BatchPayload;
  /** Update many HeroSlice documents */
  updateManyHeroSlicesConnection: HeroSliceConnection;
  /**
   * Update many liveSlices
   * @deprecated Please use the new paginated many mutation (updateManyLiveSlicesConnection)
   */
  updateManyLiveSlices: BatchPayload;
  /** Update many LiveSlice documents */
  updateManyLiveSlicesConnection: LiveSliceConnection;
  /**
   * Update many navbarMatters
   * @deprecated Please use the new paginated many mutation (updateManyNavbarMattersConnection)
   */
  updateManyNavbarMatters: BatchPayload;
  /** Update many NavbarMatter documents */
  updateManyNavbarMattersConnection: NavbarMatterConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many questionSlices
   * @deprecated Please use the new paginated many mutation (updateManyQuestionSlicesConnection)
   */
  updateManyQuestionSlices: BatchPayload;
  /** Update many QuestionSlice documents */
  updateManyQuestionSlicesConnection: QuestionSliceConnection;
  /**
   * Update many scheduleSlices
   * @deprecated Please use the new paginated many mutation (updateManyScheduleSlicesConnection)
   */
  updateManyScheduleSlices: BatchPayload;
  /** Update many ScheduleSlice documents */
  updateManyScheduleSlicesConnection: ScheduleSliceConnection;
  /**
   * Update many seoSlices
   * @deprecated Please use the new paginated many mutation (updateManySeoSlicesConnection)
   */
  updateManySeoSlices: BatchPayload;
  /** Update many SeoSlice documents */
  updateManySeoSlicesConnection: SeoSliceConnection;
  /**
   * Update many spacerAtoms
   * @deprecated Please use the new paginated many mutation (updateManySpacerAtomsConnection)
   */
  updateManySpacerAtoms: BatchPayload;
  /** Update many SpacerAtom documents */
  updateManySpacerAtomsConnection: SpacerAtomConnection;
  /**
   * Update many speakers
   * @deprecated Please use the new paginated many mutation (updateManySpeakersConnection)
   */
  updateManySpeakers: BatchPayload;
  /** Update many Speaker documents */
  updateManySpeakersConnection: SpeakerConnection;
  /**
   * Update many speakersSlices
   * @deprecated Please use the new paginated many mutation (updateManySpeakersSlicesConnection)
   */
  updateManySpeakersSlices: BatchPayload;
  /** Update many SpeakersSlice documents */
  updateManySpeakersSlicesConnection: SpeakersSliceConnection;
  /**
   * Update many themesSlice
   * @deprecated Please use the new paginated many mutation (updateManyThemesSliceConnection)
   */
  updateManyThemesSlice: BatchPayload;
  /** Update many ThemeSlice documents */
  updateManyThemesSliceConnection: ThemeSliceConnection;
  /** Update one navbarMatter */
  updateNavbarMatter?: Maybe<NavbarMatter>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one questionSlice */
  updateQuestionSlice?: Maybe<QuestionSlice>;
  /** Update one scheduleSlice */
  updateScheduleSlice?: Maybe<ScheduleSlice>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one seoSlice */
  updateSeoSlice?: Maybe<SeoSlice>;
  /** Update one spacerAtom */
  updateSpacerAtom?: Maybe<SpacerAtom>;
  /** Update one speaker */
  updateSpeaker?: Maybe<Speaker>;
  /** Update one speakersSlice */
  updateSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Update one themeSlice */
  updateThemeSlice?: Maybe<ThemeSlice>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one event */
  upsertEvent?: Maybe<Event>;
  /** Upsert one heroSlice */
  upsertHeroSlice?: Maybe<HeroSlice>;
  /** Upsert one liveSlice */
  upsertLiveSlice?: Maybe<LiveSlice>;
  /** Upsert one navbarMatter */
  upsertNavbarMatter?: Maybe<NavbarMatter>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one questionSlice */
  upsertQuestionSlice?: Maybe<QuestionSlice>;
  /** Upsert one scheduleSlice */
  upsertScheduleSlice?: Maybe<ScheduleSlice>;
  /** Upsert one seoSlice */
  upsertSeoSlice?: Maybe<SeoSlice>;
  /** Upsert one spacerAtom */
  upsertSpacerAtom?: Maybe<SpacerAtom>;
  /** Upsert one speaker */
  upsertSpeaker?: Maybe<Speaker>;
  /** Upsert one speakersSlice */
  upsertSpeakersSlice?: Maybe<SpeakersSlice>;
  /** Upsert one themeSlice */
  upsertThemeSlice?: Maybe<ThemeSlice>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateHeroSliceArgs = {
  data: HeroSliceCreateInput;
};


export type MutationCreateLiveSliceArgs = {
  data: LiveSliceCreateInput;
};


export type MutationCreateNavbarMatterArgs = {
  data: NavbarMatterCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateQuestionSliceArgs = {
  data: QuestionSliceCreateInput;
};


export type MutationCreateScheduleSliceArgs = {
  data: ScheduleSliceCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSeoSliceArgs = {
  data: SeoSliceCreateInput;
};


export type MutationCreateSpacerAtomArgs = {
  data: SpacerAtomCreateInput;
};


export type MutationCreateSpeakerArgs = {
  data: SpeakerCreateInput;
};


export type MutationCreateSpeakersSliceArgs = {
  data: SpeakersSliceCreateInput;
};


export type MutationCreateThemeSliceArgs = {
  data: ThemeSliceCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteHeroSliceArgs = {
  where: HeroSliceWhereUniqueInput;
};


export type MutationDeleteLiveSliceArgs = {
  where: LiveSliceWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
};


export type MutationDeleteManyEventsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationDeleteManyHeroSlicesArgs = {
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationDeleteManyHeroSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationDeleteManyLiveSlicesArgs = {
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationDeleteManyLiveSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationDeleteManyNavbarMattersArgs = {
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationDeleteManyNavbarMattersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyQuestionSlicesArgs = {
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationDeleteManyQuestionSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationDeleteManyScheduleSlicesArgs = {
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationDeleteManyScheduleSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationDeleteManySeoSlicesArgs = {
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationDeleteManySeoSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationDeleteManySpacerAtomsArgs = {
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationDeleteManySpacerAtomsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationDeleteManySpeakersArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationDeleteManySpeakersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationDeleteManySpeakersSlicesArgs = {
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationDeleteManySpeakersSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationDeleteManyThemesSliceArgs = {
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationDeleteManyThemesSliceConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationDeleteNavbarMatterArgs = {
  where: NavbarMatterWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteQuestionSliceArgs = {
  where: QuestionSliceWhereUniqueInput;
};


export type MutationDeleteScheduleSliceArgs = {
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSeoSliceArgs = {
  where: SeoSliceWhereUniqueInput;
};


export type MutationDeleteSpacerAtomArgs = {
  where: SpacerAtomWhereUniqueInput;
};


export type MutationDeleteSpeakerArgs = {
  where: SpeakerWhereUniqueInput;
};


export type MutationDeleteSpeakersSliceArgs = {
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationDeleteThemeSliceArgs = {
  where: ThemeSliceWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishEventArgs = {
  to?: Array<Stage>;
  where: EventWhereUniqueInput;
};


export type MutationPublishHeroSliceArgs = {
  to?: Array<Stage>;
  where: HeroSliceWhereUniqueInput;
};


export type MutationPublishLiveSliceArgs = {
  to?: Array<Stage>;
  where: LiveSliceWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyEventsArgs = {
  to?: Array<Stage>;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationPublishManyEventsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationPublishManyHeroSlicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationPublishManyHeroSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationPublishManyLiveSlicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationPublishManyLiveSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationPublishManyNavbarMattersArgs = {
  to?: Array<Stage>;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationPublishManyNavbarMattersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyQuestionSlicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationPublishManyQuestionSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationPublishManyScheduleSlicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationPublishManyScheduleSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationPublishManySeoSlicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationPublishManySeoSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationPublishManySpacerAtomsArgs = {
  to?: Array<Stage>;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationPublishManySpacerAtomsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationPublishManySpeakersArgs = {
  to?: Array<Stage>;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationPublishManySpeakersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationPublishManySpeakersSlicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationPublishManySpeakersSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationPublishManyThemesSliceArgs = {
  to?: Array<Stage>;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationPublishManyThemesSliceConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationPublishNavbarMatterArgs = {
  to?: Array<Stage>;
  where: NavbarMatterWhereUniqueInput;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishQuestionSliceArgs = {
  to?: Array<Stage>;
  where: QuestionSliceWhereUniqueInput;
};


export type MutationPublishScheduleSliceArgs = {
  to?: Array<Stage>;
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationPublishSeoSliceArgs = {
  to?: Array<Stage>;
  where: SeoSliceWhereUniqueInput;
};


export type MutationPublishSpacerAtomArgs = {
  to?: Array<Stage>;
  where: SpacerAtomWhereUniqueInput;
};


export type MutationPublishSpeakerArgs = {
  to?: Array<Stage>;
  where: SpeakerWhereUniqueInput;
};


export type MutationPublishSpeakersSliceArgs = {
  to?: Array<Stage>;
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationPublishThemeSliceArgs = {
  to?: Array<Stage>;
  where: ThemeSliceWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishEventArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EventWhereUniqueInput;
};


export type MutationSchedulePublishHeroSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HeroSliceWhereUniqueInput;
};


export type MutationSchedulePublishLiveSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LiveSliceWhereUniqueInput;
};


export type MutationSchedulePublishNavbarMatterArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavbarMatterWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishQuestionSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: QuestionSliceWhereUniqueInput;
};


export type MutationSchedulePublishScheduleSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationSchedulePublishSeoSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SeoSliceWhereUniqueInput;
};


export type MutationSchedulePublishSpacerAtomArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SpacerAtomWhereUniqueInput;
};


export type MutationSchedulePublishSpeakerArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SpeakerWhereUniqueInput;
};


export type MutationSchedulePublishSpeakersSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationSchedulePublishThemeSliceArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ThemeSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishEventArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: EventWhereUniqueInput;
};


export type MutationScheduleUnpublishHeroSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: HeroSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishLiveSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: LiveSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishNavbarMatterArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: NavbarMatterWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishQuestionSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: QuestionSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishScheduleSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishSeoSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: SeoSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishSpacerAtomArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: SpacerAtomWhereUniqueInput;
};


export type MutationScheduleUnpublishSpeakerArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: SpeakerWhereUniqueInput;
};


export type MutationScheduleUnpublishSpeakersSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationScheduleUnpublishThemeSliceArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ThemeSliceWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishEventArgs = {
  from?: Array<Stage>;
  where: EventWhereUniqueInput;
};


export type MutationUnpublishHeroSliceArgs = {
  from?: Array<Stage>;
  where: HeroSliceWhereUniqueInput;
};


export type MutationUnpublishLiveSliceArgs = {
  from?: Array<Stage>;
  where: LiveSliceWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyEventsArgs = {
  from?: Array<Stage>;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationUnpublishManyEventsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationUnpublishManyHeroSlicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationUnpublishManyHeroSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationUnpublishManyLiveSlicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationUnpublishManyLiveSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationUnpublishManyNavbarMattersArgs = {
  from?: Array<Stage>;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationUnpublishManyNavbarMattersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyQuestionSlicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationUnpublishManyQuestionSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationUnpublishManyScheduleSlicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationUnpublishManyScheduleSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationUnpublishManySeoSlicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationUnpublishManySeoSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationUnpublishManySpacerAtomsArgs = {
  from?: Array<Stage>;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationUnpublishManySpacerAtomsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationUnpublishManySpeakersArgs = {
  from?: Array<Stage>;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationUnpublishManySpeakersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationUnpublishManySpeakersSlicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationUnpublishManySpeakersSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationUnpublishManyThemesSliceArgs = {
  from?: Array<Stage>;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationUnpublishManyThemesSliceConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationUnpublishNavbarMatterArgs = {
  from?: Array<Stage>;
  where: NavbarMatterWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishQuestionSliceArgs = {
  from?: Array<Stage>;
  where: QuestionSliceWhereUniqueInput;
};


export type MutationUnpublishScheduleSliceArgs = {
  from?: Array<Stage>;
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationUnpublishSeoSliceArgs = {
  from?: Array<Stage>;
  where: SeoSliceWhereUniqueInput;
};


export type MutationUnpublishSpacerAtomArgs = {
  from?: Array<Stage>;
  where: SpacerAtomWhereUniqueInput;
};


export type MutationUnpublishSpeakerArgs = {
  from?: Array<Stage>;
  where: SpeakerWhereUniqueInput;
};


export type MutationUnpublishSpeakersSliceArgs = {
  from?: Array<Stage>;
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationUnpublishThemeSliceArgs = {
  from?: Array<Stage>;
  where: ThemeSliceWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateHeroSliceArgs = {
  data: HeroSliceUpdateInput;
  where: HeroSliceWhereUniqueInput;
};


export type MutationUpdateLiveSliceArgs = {
  data: LiveSliceUpdateInput;
  where: LiveSliceWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyEventsArgs = {
  data: EventUpdateManyInput;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationUpdateManyEventsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: EventUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EventManyWhereInput>;
};


export type MutationUpdateManyHeroSlicesArgs = {
  data: HeroSliceUpdateManyInput;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationUpdateManyHeroSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: HeroSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HeroSliceManyWhereInput>;
};


export type MutationUpdateManyLiveSlicesArgs = {
  data: LiveSliceUpdateManyInput;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationUpdateManyLiveSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: LiveSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<LiveSliceManyWhereInput>;
};


export type MutationUpdateManyNavbarMattersArgs = {
  data: NavbarMatterUpdateManyInput;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationUpdateManyNavbarMattersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: NavbarMatterUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavbarMatterManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyQuestionSlicesArgs = {
  data: QuestionSliceUpdateManyInput;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationUpdateManyQuestionSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: QuestionSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuestionSliceManyWhereInput>;
};


export type MutationUpdateManyScheduleSlicesArgs = {
  data: ScheduleSliceUpdateManyInput;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationUpdateManyScheduleSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ScheduleSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduleSliceManyWhereInput>;
};


export type MutationUpdateManySeoSlicesArgs = {
  data: SeoSliceUpdateManyInput;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationUpdateManySeoSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: SeoSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SeoSliceManyWhereInput>;
};


export type MutationUpdateManySpacerAtomsArgs = {
  data: SpacerAtomUpdateManyInput;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationUpdateManySpacerAtomsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: SpacerAtomUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpacerAtomManyWhereInput>;
};


export type MutationUpdateManySpeakersArgs = {
  data: SpeakerUpdateManyInput;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationUpdateManySpeakersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: SpeakerUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationUpdateManySpeakersSlicesArgs = {
  data: SpeakersSliceUpdateManyInput;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationUpdateManySpeakersSlicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: SpeakersSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpeakersSliceManyWhereInput>;
};


export type MutationUpdateManyThemesSliceArgs = {
  data: ThemeSliceUpdateManyInput;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationUpdateManyThemesSliceConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ThemeSliceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ThemeSliceManyWhereInput>;
};


export type MutationUpdateNavbarMatterArgs = {
  data: NavbarMatterUpdateInput;
  where: NavbarMatterWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateQuestionSliceArgs = {
  data: QuestionSliceUpdateInput;
  where: QuestionSliceWhereUniqueInput;
};


export type MutationUpdateScheduleSliceArgs = {
  data: ScheduleSliceUpdateInput;
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSeoSliceArgs = {
  data: SeoSliceUpdateInput;
  where: SeoSliceWhereUniqueInput;
};


export type MutationUpdateSpacerAtomArgs = {
  data: SpacerAtomUpdateInput;
  where: SpacerAtomWhereUniqueInput;
};


export type MutationUpdateSpeakerArgs = {
  data: SpeakerUpdateInput;
  where: SpeakerWhereUniqueInput;
};


export type MutationUpdateSpeakersSliceArgs = {
  data: SpeakersSliceUpdateInput;
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationUpdateThemeSliceArgs = {
  data: ThemeSliceUpdateInput;
  where: ThemeSliceWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertEventArgs = {
  upsert: EventUpsertInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertHeroSliceArgs = {
  upsert: HeroSliceUpsertInput;
  where: HeroSliceWhereUniqueInput;
};


export type MutationUpsertLiveSliceArgs = {
  upsert: LiveSliceUpsertInput;
  where: LiveSliceWhereUniqueInput;
};


export type MutationUpsertNavbarMatterArgs = {
  upsert: NavbarMatterUpsertInput;
  where: NavbarMatterWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertQuestionSliceArgs = {
  upsert: QuestionSliceUpsertInput;
  where: QuestionSliceWhereUniqueInput;
};


export type MutationUpsertScheduleSliceArgs = {
  upsert: ScheduleSliceUpsertInput;
  where: ScheduleSliceWhereUniqueInput;
};


export type MutationUpsertSeoSliceArgs = {
  upsert: SeoSliceUpsertInput;
  where: SeoSliceWhereUniqueInput;
};


export type MutationUpsertSpacerAtomArgs = {
  upsert: SpacerAtomUpsertInput;
  where: SpacerAtomWhereUniqueInput;
};


export type MutationUpsertSpeakerArgs = {
  upsert: SpeakerUpsertInput;
  where: SpeakerWhereUniqueInput;
};


export type MutationUpsertSpeakersSliceArgs = {
  upsert: SpeakersSliceUpsertInput;
  where: SpeakersSliceWhereUniqueInput;
};


export type MutationUpsertThemeSliceArgs = {
  upsert: ThemeSliceUpsertInput;
  where: ThemeSliceWhereUniqueInput;
};

export type NavbarMatter = Node & {
  __typename?: 'NavbarMatter';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NavbarMatter>;
  /** List of NavbarMatter versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  items: Array<NavbarMatterItems>;
  logo?: Maybe<Asset>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavbarMatterCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type NavbarMatterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NavbarMatterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type NavbarMatterItemsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


export type NavbarMatterLogoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type NavbarMatterPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type NavbarMatterPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type NavbarMatterScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type NavbarMatterUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type NavbarMatterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavbarMatterWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavbarMatterConnection = {
  __typename?: 'NavbarMatterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavbarMatterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavbarMatterCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<NavbarMatterItemsCreateManyInlineInput>;
  logo?: Maybe<AssetCreateOneInlineInput>;
  pages?: Maybe<PageCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavbarMatterCreateManyInlineInput = {
  /** Connect multiple existing NavbarMatter documents */
  connect?: Maybe<Array<NavbarMatterWhereUniqueInput>>;
  /** Create and connect multiple existing NavbarMatter documents */
  create?: Maybe<Array<NavbarMatterCreateInput>>;
};

export type NavbarMatterCreateOneInlineInput = {
  /** Connect one existing NavbarMatter document */
  connect?: Maybe<NavbarMatterWhereUniqueInput>;
  /** Create and connect one NavbarMatter document */
  create?: Maybe<NavbarMatterCreateInput>;
};

/** An edge in a connection. */
export type NavbarMatterEdge = {
  __typename?: 'NavbarMatterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NavbarMatter;
};

export type NavbarMatterItems = Page;

export type NavbarMatterItemsConnectInput = {
  Page?: Maybe<PageConnectInput>;
};

export type NavbarMatterItemsCreateInput = {
  Page?: Maybe<PageCreateInput>;
};

export type NavbarMatterItemsCreateManyInlineInput = {
  /** Connect multiple existing NavbarMatterItems documents */
  connect?: Maybe<Array<NavbarMatterItemsWhereUniqueInput>>;
  /** Create and connect multiple existing NavbarMatterItems documents */
  create?: Maybe<Array<NavbarMatterItemsCreateInput>>;
};

export type NavbarMatterItemsCreateOneInlineInput = {
  /** Connect one existing NavbarMatterItems document */
  connect?: Maybe<NavbarMatterItemsWhereUniqueInput>;
  /** Create and connect one NavbarMatterItems document */
  create?: Maybe<NavbarMatterItemsCreateInput>;
};

export type NavbarMatterItemsUpdateInput = {
  Page?: Maybe<PageUpdateInput>;
};

export type NavbarMatterItemsUpdateManyInlineInput = {
  /** Connect multiple existing NavbarMatterItems documents */
  connect?: Maybe<Array<NavbarMatterItemsConnectInput>>;
  /** Create and connect multiple NavbarMatterItems documents */
  create?: Maybe<Array<NavbarMatterItemsCreateInput>>;
  /** Delete multiple NavbarMatterItems documents */
  delete?: Maybe<Array<NavbarMatterItemsWhereUniqueInput>>;
  /** Disconnect multiple NavbarMatterItems documents */
  disconnect?: Maybe<Array<NavbarMatterItemsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavbarMatterItems documents */
  set?: Maybe<Array<NavbarMatterItemsWhereUniqueInput>>;
  /** Update multiple NavbarMatterItems documents */
  update?: Maybe<Array<NavbarMatterItemsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavbarMatterItems documents */
  upsert?: Maybe<Array<NavbarMatterItemsUpsertWithNestedWhereUniqueInput>>;
};

export type NavbarMatterItemsUpdateManyWithNestedWhereInput = {
  Page?: Maybe<PageUpdateManyWithNestedWhereInput>;
};

export type NavbarMatterItemsUpdateOneInlineInput = {
  /** Connect existing NavbarMatterItems document */
  connect?: Maybe<NavbarMatterItemsWhereUniqueInput>;
  /** Create and connect one NavbarMatterItems document */
  create?: Maybe<NavbarMatterItemsCreateInput>;
  /** Delete currently connected NavbarMatterItems document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavbarMatterItems document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single NavbarMatterItems document */
  update?: Maybe<NavbarMatterItemsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavbarMatterItems document */
  upsert?: Maybe<NavbarMatterItemsUpsertWithNestedWhereUniqueInput>;
};

export type NavbarMatterItemsUpdateWithNestedWhereUniqueInput = {
  Page?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type NavbarMatterItemsUpsertWithNestedWhereUniqueInput = {
  Page?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type NavbarMatterItemsWhereInput = {
  Page?: Maybe<PageWhereInput>;
};

export type NavbarMatterItemsWhereUniqueInput = {
  Page?: Maybe<PageWhereUniqueInput>;
};

/** Identifies documents */
export type NavbarMatterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavbarMatterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavbarMatterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavbarMatterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  logo?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum NavbarMatterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavbarMatterUpdateInput = {
  items?: Maybe<NavbarMatterItemsUpdateManyInlineInput>;
  logo?: Maybe<AssetUpdateOneInlineInput>;
  pages?: Maybe<PageUpdateManyInlineInput>;
};

export type NavbarMatterUpdateManyInlineInput = {
  /** Connect multiple existing NavbarMatter documents */
  connect?: Maybe<Array<NavbarMatterConnectInput>>;
  /** Create and connect multiple NavbarMatter documents */
  create?: Maybe<Array<NavbarMatterCreateInput>>;
  /** Delete multiple NavbarMatter documents */
  delete?: Maybe<Array<NavbarMatterWhereUniqueInput>>;
  /** Disconnect multiple NavbarMatter documents */
  disconnect?: Maybe<Array<NavbarMatterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavbarMatter documents */
  set?: Maybe<Array<NavbarMatterWhereUniqueInput>>;
  /** Update multiple NavbarMatter documents */
  update?: Maybe<Array<NavbarMatterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavbarMatter documents */
  upsert?: Maybe<Array<NavbarMatterUpsertWithNestedWhereUniqueInput>>;
};

export type NavbarMatterUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type NavbarMatterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavbarMatterUpdateManyInput;
  /** Document search */
  where: NavbarMatterWhereInput;
};

export type NavbarMatterUpdateOneInlineInput = {
  /** Connect existing NavbarMatter document */
  connect?: Maybe<NavbarMatterWhereUniqueInput>;
  /** Create and connect one NavbarMatter document */
  create?: Maybe<NavbarMatterCreateInput>;
  /** Delete currently connected NavbarMatter document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavbarMatter document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single NavbarMatter document */
  update?: Maybe<NavbarMatterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavbarMatter document */
  upsert?: Maybe<NavbarMatterUpsertWithNestedWhereUniqueInput>;
};

export type NavbarMatterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavbarMatterUpdateInput;
  /** Unique document search */
  where: NavbarMatterWhereUniqueInput;
};

export type NavbarMatterUpsertInput = {
  /** Create document if it didn't exist */
  create: NavbarMatterCreateInput;
  /** Update document if it exists */
  update: NavbarMatterUpdateInput;
};

export type NavbarMatterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavbarMatterUpsertInput;
  /** Unique document search */
  where: NavbarMatterWhereUniqueInput;
};

/** Identifies documents */
export type NavbarMatterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavbarMatterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavbarMatterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavbarMatterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  logo?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References NavbarMatter record uniquely */
export type NavbarMatterWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  navbarMatters: Array<NavbarMatter>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slices: Array<PageSlices>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PageNavbarMattersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NavbarMatterWhereInput>;
};


export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PageSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  navbarMatters?: Maybe<NavbarMatterCreateManyInlineInput>;
  slices?: Maybe<PageSlicesCreateManyInlineInput>;
  slug: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  navbarMatters_every?: Maybe<NavbarMatterWhereInput>;
  navbarMatters_none?: Maybe<NavbarMatterWhereInput>;
  navbarMatters_some?: Maybe<NavbarMatterWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageSlices = HeroSlice | LiveSlice | NavbarMatter | QuestionSlice | ScheduleSlice | SeoSlice | SpacerAtom | SpeakersSlice | ThemeSlice;

export type PageSlicesConnectInput = {
  HeroSlice?: Maybe<HeroSliceConnectInput>;
  LiveSlice?: Maybe<LiveSliceConnectInput>;
  NavbarMatter?: Maybe<NavbarMatterConnectInput>;
  QuestionSlice?: Maybe<QuestionSliceConnectInput>;
  ScheduleSlice?: Maybe<ScheduleSliceConnectInput>;
  SeoSlice?: Maybe<SeoSliceConnectInput>;
  SpacerAtom?: Maybe<SpacerAtomConnectInput>;
  SpeakersSlice?: Maybe<SpeakersSliceConnectInput>;
  ThemeSlice?: Maybe<ThemeSliceConnectInput>;
};

export type PageSlicesCreateInput = {
  HeroSlice?: Maybe<HeroSliceCreateInput>;
  LiveSlice?: Maybe<LiveSliceCreateInput>;
  NavbarMatter?: Maybe<NavbarMatterCreateInput>;
  QuestionSlice?: Maybe<QuestionSliceCreateInput>;
  ScheduleSlice?: Maybe<ScheduleSliceCreateInput>;
  SeoSlice?: Maybe<SeoSliceCreateInput>;
  SpacerAtom?: Maybe<SpacerAtomCreateInput>;
  SpeakersSlice?: Maybe<SpeakersSliceCreateInput>;
  ThemeSlice?: Maybe<ThemeSliceCreateInput>;
};

export type PageSlicesCreateManyInlineInput = {
  /** Connect multiple existing PageSlices documents */
  connect?: Maybe<Array<PageSlicesWhereUniqueInput>>;
  /** Create and connect multiple existing PageSlices documents */
  create?: Maybe<Array<PageSlicesCreateInput>>;
};

export type PageSlicesCreateOneInlineInput = {
  /** Connect one existing PageSlices document */
  connect?: Maybe<PageSlicesWhereUniqueInput>;
  /** Create and connect one PageSlices document */
  create?: Maybe<PageSlicesCreateInput>;
};

export type PageSlicesUpdateInput = {
  HeroSlice?: Maybe<HeroSliceUpdateInput>;
  LiveSlice?: Maybe<LiveSliceUpdateInput>;
  NavbarMatter?: Maybe<NavbarMatterUpdateInput>;
  QuestionSlice?: Maybe<QuestionSliceUpdateInput>;
  ScheduleSlice?: Maybe<ScheduleSliceUpdateInput>;
  SeoSlice?: Maybe<SeoSliceUpdateInput>;
  SpacerAtom?: Maybe<SpacerAtomUpdateInput>;
  SpeakersSlice?: Maybe<SpeakersSliceUpdateInput>;
  ThemeSlice?: Maybe<ThemeSliceUpdateInput>;
};

export type PageSlicesUpdateManyInlineInput = {
  /** Connect multiple existing PageSlices documents */
  connect?: Maybe<Array<PageSlicesConnectInput>>;
  /** Create and connect multiple PageSlices documents */
  create?: Maybe<Array<PageSlicesCreateInput>>;
  /** Delete multiple PageSlices documents */
  delete?: Maybe<Array<PageSlicesWhereUniqueInput>>;
  /** Disconnect multiple PageSlices documents */
  disconnect?: Maybe<Array<PageSlicesWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageSlices documents */
  set?: Maybe<Array<PageSlicesWhereUniqueInput>>;
  /** Update multiple PageSlices documents */
  update?: Maybe<Array<PageSlicesUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageSlices documents */
  upsert?: Maybe<Array<PageSlicesUpsertWithNestedWhereUniqueInput>>;
};

export type PageSlicesUpdateManyWithNestedWhereInput = {
  HeroSlice?: Maybe<HeroSliceUpdateManyWithNestedWhereInput>;
  LiveSlice?: Maybe<LiveSliceUpdateManyWithNestedWhereInput>;
  NavbarMatter?: Maybe<NavbarMatterUpdateManyWithNestedWhereInput>;
  QuestionSlice?: Maybe<QuestionSliceUpdateManyWithNestedWhereInput>;
  ScheduleSlice?: Maybe<ScheduleSliceUpdateManyWithNestedWhereInput>;
  SeoSlice?: Maybe<SeoSliceUpdateManyWithNestedWhereInput>;
  SpacerAtom?: Maybe<SpacerAtomUpdateManyWithNestedWhereInput>;
  SpeakersSlice?: Maybe<SpeakersSliceUpdateManyWithNestedWhereInput>;
  ThemeSlice?: Maybe<ThemeSliceUpdateManyWithNestedWhereInput>;
};

export type PageSlicesUpdateOneInlineInput = {
  /** Connect existing PageSlices document */
  connect?: Maybe<PageSlicesWhereUniqueInput>;
  /** Create and connect one PageSlices document */
  create?: Maybe<PageSlicesCreateInput>;
  /** Delete currently connected PageSlices document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected PageSlices document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single PageSlices document */
  update?: Maybe<PageSlicesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSlices document */
  upsert?: Maybe<PageSlicesUpsertWithNestedWhereUniqueInput>;
};

export type PageSlicesUpdateWithNestedWhereUniqueInput = {
  HeroSlice?: Maybe<HeroSliceUpdateWithNestedWhereUniqueInput>;
  LiveSlice?: Maybe<LiveSliceUpdateWithNestedWhereUniqueInput>;
  NavbarMatter?: Maybe<NavbarMatterUpdateWithNestedWhereUniqueInput>;
  QuestionSlice?: Maybe<QuestionSliceUpdateWithNestedWhereUniqueInput>;
  ScheduleSlice?: Maybe<ScheduleSliceUpdateWithNestedWhereUniqueInput>;
  SeoSlice?: Maybe<SeoSliceUpdateWithNestedWhereUniqueInput>;
  SpacerAtom?: Maybe<SpacerAtomUpdateWithNestedWhereUniqueInput>;
  SpeakersSlice?: Maybe<SpeakersSliceUpdateWithNestedWhereUniqueInput>;
  ThemeSlice?: Maybe<ThemeSliceUpdateWithNestedWhereUniqueInput>;
};

export type PageSlicesUpsertWithNestedWhereUniqueInput = {
  HeroSlice?: Maybe<HeroSliceUpsertWithNestedWhereUniqueInput>;
  LiveSlice?: Maybe<LiveSliceUpsertWithNestedWhereUniqueInput>;
  NavbarMatter?: Maybe<NavbarMatterUpsertWithNestedWhereUniqueInput>;
  QuestionSlice?: Maybe<QuestionSliceUpsertWithNestedWhereUniqueInput>;
  ScheduleSlice?: Maybe<ScheduleSliceUpsertWithNestedWhereUniqueInput>;
  SeoSlice?: Maybe<SeoSliceUpsertWithNestedWhereUniqueInput>;
  SpacerAtom?: Maybe<SpacerAtomUpsertWithNestedWhereUniqueInput>;
  SpeakersSlice?: Maybe<SpeakersSliceUpsertWithNestedWhereUniqueInput>;
  ThemeSlice?: Maybe<ThemeSliceUpsertWithNestedWhereUniqueInput>;
};

export type PageSlicesWhereInput = {
  HeroSlice?: Maybe<HeroSliceWhereInput>;
  LiveSlice?: Maybe<LiveSliceWhereInput>;
  NavbarMatter?: Maybe<NavbarMatterWhereInput>;
  QuestionSlice?: Maybe<QuestionSliceWhereInput>;
  ScheduleSlice?: Maybe<ScheduleSliceWhereInput>;
  SeoSlice?: Maybe<SeoSliceWhereInput>;
  SpacerAtom?: Maybe<SpacerAtomWhereInput>;
  SpeakersSlice?: Maybe<SpeakersSliceWhereInput>;
  ThemeSlice?: Maybe<ThemeSliceWhereInput>;
};

export type PageSlicesWhereUniqueInput = {
  HeroSlice?: Maybe<HeroSliceWhereUniqueInput>;
  LiveSlice?: Maybe<LiveSliceWhereUniqueInput>;
  NavbarMatter?: Maybe<NavbarMatterWhereUniqueInput>;
  QuestionSlice?: Maybe<QuestionSliceWhereUniqueInput>;
  ScheduleSlice?: Maybe<ScheduleSliceWhereUniqueInput>;
  SeoSlice?: Maybe<SeoSliceWhereUniqueInput>;
  SpacerAtom?: Maybe<SpacerAtomWhereUniqueInput>;
  SpeakersSlice?: Maybe<SpeakersSliceWhereUniqueInput>;
  ThemeSlice?: Maybe<ThemeSliceWhereUniqueInput>;
};

export type PageUpdateInput = {
  navbarMatters?: Maybe<NavbarMatterUpdateManyInlineInput>;
  slices?: Maybe<PageSlicesUpdateManyInlineInput>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  navbarMatters_every?: Maybe<NavbarMatterWhereInput>;
  navbarMatters_none?: Maybe<NavbarMatterWhereInput>;
  navbarMatters_some?: Maybe<NavbarMatterWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single event */
  event?: Maybe<Event>;
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple events */
  events: Array<Event>;
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection;
  /** Retrieve a single heroSlice */
  heroSlice?: Maybe<HeroSlice>;
  /** Retrieve document version */
  heroSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple heroSlices */
  heroSlices: Array<HeroSlice>;
  /** Retrieve multiple heroSlices using the Relay connection interface */
  heroSlicesConnection: HeroSliceConnection;
  /** Retrieve a single liveSlice */
  liveSlice?: Maybe<LiveSlice>;
  /** Retrieve document version */
  liveSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple liveSlices */
  liveSlices: Array<LiveSlice>;
  /** Retrieve multiple liveSlices using the Relay connection interface */
  liveSlicesConnection: LiveSliceConnection;
  /** Retrieve a single navbarMatter */
  navbarMatter?: Maybe<NavbarMatter>;
  /** Retrieve document version */
  navbarMatterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navbarMatters */
  navbarMatters: Array<NavbarMatter>;
  /** Retrieve multiple navbarMatters using the Relay connection interface */
  navbarMattersConnection: NavbarMatterConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single questionSlice */
  questionSlice?: Maybe<QuestionSlice>;
  /** Retrieve document version */
  questionSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple questionSlices */
  questionSlices: Array<QuestionSlice>;
  /** Retrieve multiple questionSlices using the Relay connection interface */
  questionSlicesConnection: QuestionSliceConnection;
  /** Retrieve a single scheduleSlice */
  scheduleSlice?: Maybe<ScheduleSlice>;
  /** Retrieve document version */
  scheduleSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple scheduleSlices */
  scheduleSlices: Array<ScheduleSlice>;
  /** Retrieve multiple scheduleSlices using the Relay connection interface */
  scheduleSlicesConnection: ScheduleSliceConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single seoSlice */
  seoSlice?: Maybe<SeoSlice>;
  /** Retrieve document version */
  seoSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple seoSlices */
  seoSlices: Array<SeoSlice>;
  /** Retrieve multiple seoSlices using the Relay connection interface */
  seoSlicesConnection: SeoSliceConnection;
  /** Retrieve a single spacerAtom */
  spacerAtom?: Maybe<SpacerAtom>;
  /** Retrieve document version */
  spacerAtomVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple spacerAtoms */
  spacerAtoms: Array<SpacerAtom>;
  /** Retrieve multiple spacerAtoms using the Relay connection interface */
  spacerAtomsConnection: SpacerAtomConnection;
  /** Retrieve a single speaker */
  speaker?: Maybe<Speaker>;
  /** Retrieve document version */
  speakerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple speakers */
  speakers: Array<Speaker>;
  /** Retrieve multiple speakers using the Relay connection interface */
  speakersConnection: SpeakerConnection;
  /** Retrieve a single speakersSlice */
  speakersSlice?: Maybe<SpeakersSlice>;
  /** Retrieve document version */
  speakersSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple speakersSlices */
  speakersSlices: Array<SpeakersSlice>;
  /** Retrieve multiple speakersSlices using the Relay connection interface */
  speakersSlicesConnection: SpeakersSliceConnection;
  /** Retrieve a single themeSlice */
  themeSlice?: Maybe<ThemeSlice>;
  /** Retrieve document version */
  themeSliceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple themesSlice */
  themesSlice: Array<ThemeSlice>;
  /** Retrieve multiple themesSlice using the Relay connection interface */
  themesSliceConnection: ThemeSliceConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryEventArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventWhereUniqueInput;
};


export type QueryEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<EventWhereInput>;
};


export type QueryEventsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<EventWhereInput>;
};


export type QueryHeroSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HeroSliceWhereUniqueInput;
};


export type QueryHeroSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHeroSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HeroSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HeroSliceWhereInput>;
};


export type QueryHeroSlicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HeroSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HeroSliceWhereInput>;
};


export type QueryLiveSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LiveSliceWhereUniqueInput;
};


export type QueryLiveSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLiveSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<LiveSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<LiveSliceWhereInput>;
};


export type QueryLiveSlicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<LiveSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<LiveSliceWhereInput>;
};


export type QueryNavbarMatterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavbarMatterWhereUniqueInput;
};


export type QueryNavbarMatterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavbarMattersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NavbarMatterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<NavbarMatterWhereInput>;
};


export type QueryNavbarMattersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NavbarMatterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<NavbarMatterWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryQuestionSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: QuestionSliceWhereUniqueInput;
};


export type QueryQuestionSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryQuestionSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<QuestionSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<QuestionSliceWhereInput>;
};


export type QueryQuestionSlicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<QuestionSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<QuestionSliceWhereInput>;
};


export type QueryScheduleSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduleSliceWhereUniqueInput;
};


export type QueryScheduleSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryScheduleSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduleSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduleSliceWhereInput>;
};


export type QueryScheduleSlicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduleSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduleSliceWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QuerySeoSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SeoSliceWhereUniqueInput;
};


export type QuerySeoSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySeoSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SeoSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SeoSliceWhereInput>;
};


export type QuerySeoSlicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SeoSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SeoSliceWhereInput>;
};


export type QuerySpacerAtomArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SpacerAtomWhereUniqueInput;
};


export type QuerySpacerAtomVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySpacerAtomsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SpacerAtomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SpacerAtomWhereInput>;
};


export type QuerySpacerAtomsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SpacerAtomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SpacerAtomWhereInput>;
};


export type QuerySpeakerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SpeakerWhereUniqueInput;
};


export type QuerySpeakerVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySpeakersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SpeakerWhereInput>;
};


export type QuerySpeakersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SpeakerWhereInput>;
};


export type QuerySpeakersSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SpeakersSliceWhereUniqueInput;
};


export type QuerySpeakersSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySpeakersSlicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SpeakersSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SpeakersSliceWhereInput>;
};


export type QuerySpeakersSlicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SpeakersSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SpeakersSliceWhereInput>;
};


export type QueryThemeSliceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ThemeSliceWhereUniqueInput;
};


export type QueryThemeSliceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryThemesSliceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ThemeSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ThemeSliceWhereInput>;
};


export type QueryThemesSliceConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ThemeSliceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ThemeSliceWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

export type QuestionSlice = Node & {
  __typename?: 'QuestionSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<QuestionSlice>;
  /** List of QuestionSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type QuestionSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuestionSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type QuestionSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type QuestionSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type QuestionSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuestionSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QuestionSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type QuestionSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: QuestionSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type QuestionSliceConnection = {
  __typename?: 'QuestionSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<QuestionSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type QuestionSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  pages?: Maybe<PageCreateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionSliceCreateManyInlineInput = {
  /** Connect multiple existing QuestionSlice documents */
  connect?: Maybe<Array<QuestionSliceWhereUniqueInput>>;
  /** Create and connect multiple existing QuestionSlice documents */
  create?: Maybe<Array<QuestionSliceCreateInput>>;
};

export type QuestionSliceCreateOneInlineInput = {
  /** Connect one existing QuestionSlice document */
  connect?: Maybe<QuestionSliceWhereUniqueInput>;
  /** Create and connect one QuestionSlice document */
  create?: Maybe<QuestionSliceCreateInput>;
};

/** An edge in a connection. */
export type QuestionSliceEdge = {
  __typename?: 'QuestionSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: QuestionSlice;
};

/** Identifies documents */
export type QuestionSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<QuestionSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<QuestionSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<QuestionSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum QuestionSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type QuestionSliceUpdateInput = {
  pages?: Maybe<PageUpdateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type QuestionSliceUpdateManyInlineInput = {
  /** Connect multiple existing QuestionSlice documents */
  connect?: Maybe<Array<QuestionSliceConnectInput>>;
  /** Create and connect multiple QuestionSlice documents */
  create?: Maybe<Array<QuestionSliceCreateInput>>;
  /** Delete multiple QuestionSlice documents */
  delete?: Maybe<Array<QuestionSliceWhereUniqueInput>>;
  /** Disconnect multiple QuestionSlice documents */
  disconnect?: Maybe<Array<QuestionSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing QuestionSlice documents */
  set?: Maybe<Array<QuestionSliceWhereUniqueInput>>;
  /** Update multiple QuestionSlice documents */
  update?: Maybe<Array<QuestionSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple QuestionSlice documents */
  upsert?: Maybe<Array<QuestionSliceUpsertWithNestedWhereUniqueInput>>;
};

export type QuestionSliceUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
};

export type QuestionSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QuestionSliceUpdateManyInput;
  /** Document search */
  where: QuestionSliceWhereInput;
};

export type QuestionSliceUpdateOneInlineInput = {
  /** Connect existing QuestionSlice document */
  connect?: Maybe<QuestionSliceWhereUniqueInput>;
  /** Create and connect one QuestionSlice document */
  create?: Maybe<QuestionSliceCreateInput>;
  /** Delete currently connected QuestionSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected QuestionSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single QuestionSlice document */
  update?: Maybe<QuestionSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single QuestionSlice document */
  upsert?: Maybe<QuestionSliceUpsertWithNestedWhereUniqueInput>;
};

export type QuestionSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QuestionSliceUpdateInput;
  /** Unique document search */
  where: QuestionSliceWhereUniqueInput;
};

export type QuestionSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: QuestionSliceCreateInput;
  /** Update document if it exists */
  update: QuestionSliceUpdateInput;
};

export type QuestionSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QuestionSliceUpsertInput;
  /** Unique document search */
  where: QuestionSliceWhereUniqueInput;
};

/** Identifies documents */
export type QuestionSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<QuestionSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<QuestionSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<QuestionSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References QuestionSlice record uniquely */
export type QuestionSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type ScheduleSlice = Node & {
  __typename?: 'ScheduleSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduleSlice>;
  events: Array<Event>;
  /** List of ScheduleSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ScheduleSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ScheduleSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ScheduleSliceEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EventWhereInput>;
};


export type ScheduleSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ScheduleSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type ScheduleSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ScheduleSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ScheduleSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduleSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduleSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduleSliceConnection = {
  __typename?: 'ScheduleSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduleSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduleSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<EventCreateManyInlineInput>;
  pages?: Maybe<PageCreateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduleSliceCreateManyInlineInput = {
  /** Connect multiple existing ScheduleSlice documents */
  connect?: Maybe<Array<ScheduleSliceWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduleSlice documents */
  create?: Maybe<Array<ScheduleSliceCreateInput>>;
};

export type ScheduleSliceCreateOneInlineInput = {
  /** Connect one existing ScheduleSlice document */
  connect?: Maybe<ScheduleSliceWhereUniqueInput>;
  /** Create and connect one ScheduleSlice document */
  create?: Maybe<ScheduleSliceCreateInput>;
};

/** An edge in a connection. */
export type ScheduleSliceEdge = {
  __typename?: 'ScheduleSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduleSlice;
};

/** Identifies documents */
export type ScheduleSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduleSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduleSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduleSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  events_every?: Maybe<EventWhereInput>;
  events_none?: Maybe<EventWhereInput>;
  events_some?: Maybe<EventWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduleSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ScheduleSliceUpdateInput = {
  events?: Maybe<EventUpdateManyInlineInput>;
  pages?: Maybe<PageUpdateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduleSliceUpdateManyInlineInput = {
  /** Connect multiple existing ScheduleSlice documents */
  connect?: Maybe<Array<ScheduleSliceConnectInput>>;
  /** Create and connect multiple ScheduleSlice documents */
  create?: Maybe<Array<ScheduleSliceCreateInput>>;
  /** Delete multiple ScheduleSlice documents */
  delete?: Maybe<Array<ScheduleSliceWhereUniqueInput>>;
  /** Disconnect multiple ScheduleSlice documents */
  disconnect?: Maybe<Array<ScheduleSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduleSlice documents */
  set?: Maybe<Array<ScheduleSliceWhereUniqueInput>>;
  /** Update multiple ScheduleSlice documents */
  update?: Maybe<Array<ScheduleSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduleSlice documents */
  upsert?: Maybe<Array<ScheduleSliceUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduleSliceUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
};

export type ScheduleSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduleSliceUpdateManyInput;
  /** Document search */
  where: ScheduleSliceWhereInput;
};

export type ScheduleSliceUpdateOneInlineInput = {
  /** Connect existing ScheduleSlice document */
  connect?: Maybe<ScheduleSliceWhereUniqueInput>;
  /** Create and connect one ScheduleSlice document */
  create?: Maybe<ScheduleSliceCreateInput>;
  /** Delete currently connected ScheduleSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduleSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ScheduleSlice document */
  update?: Maybe<ScheduleSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduleSlice document */
  upsert?: Maybe<ScheduleSliceUpsertWithNestedWhereUniqueInput>;
};

export type ScheduleSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduleSliceUpdateInput;
  /** Unique document search */
  where: ScheduleSliceWhereUniqueInput;
};

export type ScheduleSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduleSliceCreateInput;
  /** Update document if it exists */
  update: ScheduleSliceUpdateInput;
};

export type ScheduleSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduleSliceUpsertInput;
  /** Unique document search */
  where: ScheduleSliceWhereUniqueInput;
};

/** Identifies documents */
export type ScheduleSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduleSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduleSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduleSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  events_every?: Maybe<EventWhereInput>;
  events_none?: Maybe<EventWhereInput>;
  events_some?: Maybe<EventWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduleSlice record uniquely */
export type ScheduleSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Event | HeroSlice | LiveSlice | NavbarMatter | Page | QuestionSlice | ScheduleSlice | SeoSlice | SpacerAtom | Speaker | SpeakersSlice | ThemeSlice;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SeoSlice = Node & {
  __typename?: 'SeoSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<SeoSlice>;
  /** List of SeoSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images: Array<Asset>;
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SeoSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SeoSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type SeoSliceImagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
};


export type SeoSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type SeoSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SeoSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type SeoSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SeoSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoSliceConnection = {
  __typename?: 'SeoSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<AssetCreateManyInlineInput>;
  pages?: Maybe<PageCreateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeoSliceCreateManyInlineInput = {
  /** Connect multiple existing SeoSlice documents */
  connect?: Maybe<Array<SeoSliceWhereUniqueInput>>;
  /** Create and connect multiple existing SeoSlice documents */
  create?: Maybe<Array<SeoSliceCreateInput>>;
};

export type SeoSliceCreateOneInlineInput = {
  /** Connect one existing SeoSlice document */
  connect?: Maybe<SeoSliceWhereUniqueInput>;
  /** Create and connect one SeoSlice document */
  create?: Maybe<SeoSliceCreateInput>;
};

/** An edge in a connection. */
export type SeoSliceEdge = {
  __typename?: 'SeoSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SeoSlice;
};

/** Identifies documents */
export type SeoSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SeoSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SeoSliceUpdateInput = {
  description?: Maybe<Scalars['String']>;
  images?: Maybe<AssetUpdateManyInlineInput>;
  pages?: Maybe<PageUpdateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type SeoSliceUpdateManyInlineInput = {
  /** Connect multiple existing SeoSlice documents */
  connect?: Maybe<Array<SeoSliceConnectInput>>;
  /** Create and connect multiple SeoSlice documents */
  create?: Maybe<Array<SeoSliceCreateInput>>;
  /** Delete multiple SeoSlice documents */
  delete?: Maybe<Array<SeoSliceWhereUniqueInput>>;
  /** Disconnect multiple SeoSlice documents */
  disconnect?: Maybe<Array<SeoSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoSlice documents */
  set?: Maybe<Array<SeoSliceWhereUniqueInput>>;
  /** Update multiple SeoSlice documents */
  update?: Maybe<Array<SeoSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoSlice documents */
  upsert?: Maybe<Array<SeoSliceUpsertWithNestedWhereUniqueInput>>;
};

export type SeoSliceUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SeoSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoSliceUpdateManyInput;
  /** Document search */
  where: SeoSliceWhereInput;
};

export type SeoSliceUpdateOneInlineInput = {
  /** Connect existing SeoSlice document */
  connect?: Maybe<SeoSliceWhereUniqueInput>;
  /** Create and connect one SeoSlice document */
  create?: Maybe<SeoSliceCreateInput>;
  /** Delete currently connected SeoSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected SeoSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single SeoSlice document */
  update?: Maybe<SeoSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoSlice document */
  upsert?: Maybe<SeoSliceUpsertWithNestedWhereUniqueInput>;
};

export type SeoSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoSliceUpdateInput;
  /** Unique document search */
  where: SeoSliceWhereUniqueInput;
};

export type SeoSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoSliceCreateInput;
  /** Update document if it exists */
  update: SeoSliceUpdateInput;
};

export type SeoSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoSliceUpsertInput;
  /** Unique document search */
  where: SeoSliceWhereUniqueInput;
};

/** Identifies documents */
export type SeoSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  images_every?: Maybe<AssetWhereInput>;
  images_none?: Maybe<AssetWhereInput>;
  images_some?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References SeoSlice record uniquely */
export type SeoSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SpacerAtom = Node & {
  __typename?: 'SpacerAtom';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SpacerAtom>;
  height?: Maybe<Scalars['Float']>;
  /** List of SpacerAtom versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SpacerAtomCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpacerAtomDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SpacerAtomHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type SpacerAtomPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type SpacerAtomPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpacerAtomScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type SpacerAtomUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SpacerAtomConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SpacerAtomWhereUniqueInput;
};

/** A connection to a list of items. */
export type SpacerAtomConnection = {
  __typename?: 'SpacerAtomConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SpacerAtomEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SpacerAtomCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['Float']>;
  pages?: Maybe<PageCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpacerAtomCreateManyInlineInput = {
  /** Connect multiple existing SpacerAtom documents */
  connect?: Maybe<Array<SpacerAtomWhereUniqueInput>>;
  /** Create and connect multiple existing SpacerAtom documents */
  create?: Maybe<Array<SpacerAtomCreateInput>>;
};

export type SpacerAtomCreateOneInlineInput = {
  /** Connect one existing SpacerAtom document */
  connect?: Maybe<SpacerAtomWhereUniqueInput>;
  /** Create and connect one SpacerAtom document */
  create?: Maybe<SpacerAtomCreateInput>;
};

/** An edge in a connection. */
export type SpacerAtomEdge = {
  __typename?: 'SpacerAtomEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SpacerAtom;
};

/** Identifies documents */
export type SpacerAtomManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpacerAtomWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpacerAtomWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpacerAtomWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SpacerAtomOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SpacerAtomUpdateInput = {
  height?: Maybe<Scalars['Float']>;
  pages?: Maybe<PageUpdateManyInlineInput>;
};

export type SpacerAtomUpdateManyInlineInput = {
  /** Connect multiple existing SpacerAtom documents */
  connect?: Maybe<Array<SpacerAtomConnectInput>>;
  /** Create and connect multiple SpacerAtom documents */
  create?: Maybe<Array<SpacerAtomCreateInput>>;
  /** Delete multiple SpacerAtom documents */
  delete?: Maybe<Array<SpacerAtomWhereUniqueInput>>;
  /** Disconnect multiple SpacerAtom documents */
  disconnect?: Maybe<Array<SpacerAtomWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SpacerAtom documents */
  set?: Maybe<Array<SpacerAtomWhereUniqueInput>>;
  /** Update multiple SpacerAtom documents */
  update?: Maybe<Array<SpacerAtomUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SpacerAtom documents */
  upsert?: Maybe<Array<SpacerAtomUpsertWithNestedWhereUniqueInput>>;
};

export type SpacerAtomUpdateManyInput = {
  height?: Maybe<Scalars['Float']>;
};

export type SpacerAtomUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SpacerAtomUpdateManyInput;
  /** Document search */
  where: SpacerAtomWhereInput;
};

export type SpacerAtomUpdateOneInlineInput = {
  /** Connect existing SpacerAtom document */
  connect?: Maybe<SpacerAtomWhereUniqueInput>;
  /** Create and connect one SpacerAtom document */
  create?: Maybe<SpacerAtomCreateInput>;
  /** Delete currently connected SpacerAtom document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected SpacerAtom document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single SpacerAtom document */
  update?: Maybe<SpacerAtomUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SpacerAtom document */
  upsert?: Maybe<SpacerAtomUpsertWithNestedWhereUniqueInput>;
};

export type SpacerAtomUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SpacerAtomUpdateInput;
  /** Unique document search */
  where: SpacerAtomWhereUniqueInput;
};

export type SpacerAtomUpsertInput = {
  /** Create document if it didn't exist */
  create: SpacerAtomCreateInput;
  /** Update document if it exists */
  update: SpacerAtomUpdateInput;
};

export type SpacerAtomUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SpacerAtomUpsertInput;
  /** Unique document search */
  where: SpacerAtomWhereUniqueInput;
};

/** Identifies documents */
export type SpacerAtomWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpacerAtomWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpacerAtomWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpacerAtomWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References SpacerAtom record uniquely */
export type SpacerAtomWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Speaker = Node & {
  __typename?: 'Speaker';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Speaker>;
  /** List of Speaker versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SpeakerCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpeakerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SpeakerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type SpeakerImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpeakerPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpeakerScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type SpeakerUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SpeakerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SpeakerWhereUniqueInput;
};

/** A connection to a list of items. */
export type SpeakerConnection = {
  __typename?: 'SpeakerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SpeakerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SpeakerCreateInput = {
  ckv5tqgby3zfx01xv9ij04taj?: Maybe<SpeakersSliceCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpeakerCreateManyInlineInput = {
  /** Connect multiple existing Speaker documents */
  connect?: Maybe<Array<SpeakerWhereUniqueInput>>;
  /** Create and connect multiple existing Speaker documents */
  create?: Maybe<Array<SpeakerCreateInput>>;
};

export type SpeakerCreateOneInlineInput = {
  /** Connect one existing Speaker document */
  connect?: Maybe<SpeakerWhereUniqueInput>;
  /** Create and connect one Speaker document */
  create?: Maybe<SpeakerCreateInput>;
};

/** An edge in a connection. */
export type SpeakerEdge = {
  __typename?: 'SpeakerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Speaker;
};

/** Identifies documents */
export type SpeakerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeakerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<AssetWhereInput>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SpeakerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SpeakerUpdateInput = {
  ckv5tqgby3zfx01xv9ij04taj?: Maybe<SpeakersSliceUpdateManyInlineInput>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SpeakerUpdateManyInlineInput = {
  /** Connect multiple existing Speaker documents */
  connect?: Maybe<Array<SpeakerConnectInput>>;
  /** Create and connect multiple Speaker documents */
  create?: Maybe<Array<SpeakerCreateInput>>;
  /** Delete multiple Speaker documents */
  delete?: Maybe<Array<SpeakerWhereUniqueInput>>;
  /** Disconnect multiple Speaker documents */
  disconnect?: Maybe<Array<SpeakerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Speaker documents */
  set?: Maybe<Array<SpeakerWhereUniqueInput>>;
  /** Update multiple Speaker documents */
  update?: Maybe<Array<SpeakerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Speaker documents */
  upsert?: Maybe<Array<SpeakerUpsertWithNestedWhereUniqueInput>>;
};

export type SpeakerUpdateManyInput = {
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SpeakerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SpeakerUpdateManyInput;
  /** Document search */
  where: SpeakerWhereInput;
};

export type SpeakerUpdateOneInlineInput = {
  /** Connect existing Speaker document */
  connect?: Maybe<SpeakerWhereUniqueInput>;
  /** Create and connect one Speaker document */
  create?: Maybe<SpeakerCreateInput>;
  /** Delete currently connected Speaker document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Speaker document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Speaker document */
  update?: Maybe<SpeakerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Speaker document */
  upsert?: Maybe<SpeakerUpsertWithNestedWhereUniqueInput>;
};

export type SpeakerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SpeakerUpdateInput;
  /** Unique document search */
  where: SpeakerWhereUniqueInput;
};

export type SpeakerUpsertInput = {
  /** Create document if it didn't exist */
  create: SpeakerCreateInput;
  /** Update document if it exists */
  update: SpeakerUpdateInput;
};

export type SpeakerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SpeakerUpsertInput;
  /** Unique document search */
  where: SpeakerWhereUniqueInput;
};

/** Identifies documents */
export type SpeakerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeakerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  image?: Maybe<AssetWhereInput>;
  location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Speaker record uniquely */
export type SpeakerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SpeakersSlice = Node & {
  __typename?: 'SpeakersSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SpeakersSlice>;
  /** List of SpeakersSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  speakers: Array<Speaker>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SpeakersSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpeakersSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SpeakersSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type SpeakersSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type SpeakersSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SpeakersSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type SpeakersSliceSpeakersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SpeakerWhereInput>;
};


export type SpeakersSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SpeakersSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SpeakersSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type SpeakersSliceConnection = {
  __typename?: 'SpeakersSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SpeakersSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SpeakersSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  pages?: Maybe<PageCreateManyInlineInput>;
  speakers?: Maybe<SpeakerCreateManyInlineInput>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpeakersSliceCreateManyInlineInput = {
  /** Connect multiple existing SpeakersSlice documents */
  connect?: Maybe<Array<SpeakersSliceWhereUniqueInput>>;
  /** Create and connect multiple existing SpeakersSlice documents */
  create?: Maybe<Array<SpeakersSliceCreateInput>>;
};

export type SpeakersSliceCreateOneInlineInput = {
  /** Connect one existing SpeakersSlice document */
  connect?: Maybe<SpeakersSliceWhereUniqueInput>;
  /** Create and connect one SpeakersSlice document */
  create?: Maybe<SpeakersSliceCreateInput>;
};

/** An edge in a connection. */
export type SpeakersSliceEdge = {
  __typename?: 'SpeakersSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SpeakersSlice;
};

/** Identifies documents */
export type SpeakersSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeakersSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpeakersSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeakersSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  speakers_every?: Maybe<SpeakerWhereInput>;
  speakers_none?: Maybe<SpeakerWhereInput>;
  speakers_some?: Maybe<SpeakerWhereInput>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SpeakersSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SpeakersSliceUpdateInput = {
  pages?: Maybe<PageUpdateManyInlineInput>;
  speakers?: Maybe<SpeakerUpdateManyInlineInput>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SpeakersSliceUpdateManyInlineInput = {
  /** Connect multiple existing SpeakersSlice documents */
  connect?: Maybe<Array<SpeakersSliceConnectInput>>;
  /** Create and connect multiple SpeakersSlice documents */
  create?: Maybe<Array<SpeakersSliceCreateInput>>;
  /** Delete multiple SpeakersSlice documents */
  delete?: Maybe<Array<SpeakersSliceWhereUniqueInput>>;
  /** Disconnect multiple SpeakersSlice documents */
  disconnect?: Maybe<Array<SpeakersSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SpeakersSlice documents */
  set?: Maybe<Array<SpeakersSliceWhereUniqueInput>>;
  /** Update multiple SpeakersSlice documents */
  update?: Maybe<Array<SpeakersSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SpeakersSlice documents */
  upsert?: Maybe<Array<SpeakersSliceUpsertWithNestedWhereUniqueInput>>;
};

export type SpeakersSliceUpdateManyInput = {
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SpeakersSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SpeakersSliceUpdateManyInput;
  /** Document search */
  where: SpeakersSliceWhereInput;
};

export type SpeakersSliceUpdateOneInlineInput = {
  /** Connect existing SpeakersSlice document */
  connect?: Maybe<SpeakersSliceWhereUniqueInput>;
  /** Create and connect one SpeakersSlice document */
  create?: Maybe<SpeakersSliceCreateInput>;
  /** Delete currently connected SpeakersSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected SpeakersSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single SpeakersSlice document */
  update?: Maybe<SpeakersSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SpeakersSlice document */
  upsert?: Maybe<SpeakersSliceUpsertWithNestedWhereUniqueInput>;
};

export type SpeakersSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SpeakersSliceUpdateInput;
  /** Unique document search */
  where: SpeakersSliceWhereUniqueInput;
};

export type SpeakersSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: SpeakersSliceCreateInput;
  /** Update document if it exists */
  update: SpeakersSliceUpdateInput;
};

export type SpeakersSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SpeakersSliceUpsertInput;
  /** Unique document search */
  where: SpeakersSliceWhereUniqueInput;
};

/** Identifies documents */
export type SpeakersSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeakersSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpeakersSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeakersSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  speakers_every?: Maybe<SpeakerWhereInput>;
  speakers_none?: Maybe<SpeakerWhereInput>;
  speakers_some?: Maybe<SpeakerWhereInput>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References SpeakersSlice record uniquely */
export type SpeakersSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type ThemeSlice = Node & {
  __typename?: 'ThemeSlice';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ThemeSlice>;
  embed?: Maybe<Scalars['String']>;
  /** List of ThemeSlice versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ThemeSliceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ThemeSliceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ThemeSliceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ThemeSlicePagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageWhereInput>;
};


export type ThemeSlicePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ThemeSliceScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ThemeSliceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ThemeSliceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ThemeSliceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ThemeSliceConnection = {
  __typename?: 'ThemeSliceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ThemeSliceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ThemeSliceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  embed?: Maybe<Scalars['String']>;
  pages?: Maybe<PageCreateManyInlineInput>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThemeSliceCreateManyInlineInput = {
  /** Connect multiple existing ThemeSlice documents */
  connect?: Maybe<Array<ThemeSliceWhereUniqueInput>>;
  /** Create and connect multiple existing ThemeSlice documents */
  create?: Maybe<Array<ThemeSliceCreateInput>>;
};

export type ThemeSliceCreateOneInlineInput = {
  /** Connect one existing ThemeSlice document */
  connect?: Maybe<ThemeSliceWhereUniqueInput>;
  /** Create and connect one ThemeSlice document */
  create?: Maybe<ThemeSliceCreateInput>;
};

/** An edge in a connection. */
export type ThemeSliceEdge = {
  __typename?: 'ThemeSliceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ThemeSlice;
};

/** Identifies documents */
export type ThemeSliceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ThemeSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ThemeSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ThemeSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  embed?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  embed_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  embed_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  embed_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  embed_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  embed_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  embed_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  embed_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  embed_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  embed_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ThemeSliceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmbedAsc = 'embed_ASC',
  EmbedDesc = 'embed_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ThemeSliceUpdateInput = {
  embed?: Maybe<Scalars['String']>;
  pages?: Maybe<PageUpdateManyInlineInput>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ThemeSliceUpdateManyInlineInput = {
  /** Connect multiple existing ThemeSlice documents */
  connect?: Maybe<Array<ThemeSliceConnectInput>>;
  /** Create and connect multiple ThemeSlice documents */
  create?: Maybe<Array<ThemeSliceCreateInput>>;
  /** Delete multiple ThemeSlice documents */
  delete?: Maybe<Array<ThemeSliceWhereUniqueInput>>;
  /** Disconnect multiple ThemeSlice documents */
  disconnect?: Maybe<Array<ThemeSliceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ThemeSlice documents */
  set?: Maybe<Array<ThemeSliceWhereUniqueInput>>;
  /** Update multiple ThemeSlice documents */
  update?: Maybe<Array<ThemeSliceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ThemeSlice documents */
  upsert?: Maybe<Array<ThemeSliceUpsertWithNestedWhereUniqueInput>>;
};

export type ThemeSliceUpdateManyInput = {
  embed?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ThemeSliceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ThemeSliceUpdateManyInput;
  /** Document search */
  where: ThemeSliceWhereInput;
};

export type ThemeSliceUpdateOneInlineInput = {
  /** Connect existing ThemeSlice document */
  connect?: Maybe<ThemeSliceWhereUniqueInput>;
  /** Create and connect one ThemeSlice document */
  create?: Maybe<ThemeSliceCreateInput>;
  /** Delete currently connected ThemeSlice document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ThemeSlice document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ThemeSlice document */
  update?: Maybe<ThemeSliceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ThemeSlice document */
  upsert?: Maybe<ThemeSliceUpsertWithNestedWhereUniqueInput>;
};

export type ThemeSliceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ThemeSliceUpdateInput;
  /** Unique document search */
  where: ThemeSliceWhereUniqueInput;
};

export type ThemeSliceUpsertInput = {
  /** Create document if it didn't exist */
  create: ThemeSliceCreateInput;
  /** Update document if it exists */
  update: ThemeSliceUpdateInput;
};

export type ThemeSliceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ThemeSliceUpsertInput;
  /** Unique document search */
  where: ThemeSliceWhereUniqueInput;
};

/** Identifies documents */
export type ThemeSliceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ThemeSliceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ThemeSliceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ThemeSliceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  embed?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  embed_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  embed_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  embed_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  embed_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  embed_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  embed_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  embed_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  embed_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  embed_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  subtitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ThemeSlice record uniquely */
export type ThemeSliceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type SpacerFragment = { __typename?: 'SpacerAtom', id: string, height?: number | null | undefined };

export type NavbarFragment = { __typename?: 'NavbarMatter', id: string, logo?: { __typename?: 'Asset', url: string } | null | undefined, items: Array<{ __typename?: 'Page', id: string, slug: string, title?: string | null | undefined }> };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', id: string, slug: string }> };

export type PageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'Page', title?: string | null | undefined, slug: string, slices: Array<{ __typename?: 'HeroSlice' } | { __typename?: 'LiveSlice', id: string, title?: string | null | undefined, embed?: string | null | undefined } | { __typename?: 'NavbarMatter', id: string, logo?: { __typename?: 'Asset', url: string } | null | undefined, items: Array<{ __typename?: 'Page', id: string, slug: string, title?: string | null | undefined }> } | { __typename?: 'QuestionSlice', id: string, title?: string | null | undefined } | { __typename?: 'ScheduleSlice', id: string, title?: string | null | undefined, events: Array<{ __typename?: 'Event', id: string, title?: string | null | undefined, subtitle?: string | null | undefined, startTime?: any | null | undefined, endTime?: any | null | undefined, maybe?: boolean | null | undefined }> } | { __typename?: 'SeoSlice', id: string, title?: string | null | undefined, images: Array<{ __typename?: 'Asset', id: string, height?: number | null | undefined, width?: number | null | undefined, url: string }> } | { __typename?: 'SpacerAtom', id: string, height?: number | null | undefined } | { __typename?: 'SpeakersSlice', id: string, subtitle?: string | null | undefined, title?: string | null | undefined, speakers: Array<{ __typename?: 'Speaker', id: string, name?: string | null | undefined, location?: string | null | undefined, image?: { __typename?: 'Asset', url: string, width?: number | null | undefined, height?: number | null | undefined } | null | undefined }> } | { __typename?: 'ThemeSlice', id: string, embed?: string | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined }> } | null | undefined };

export type LiveFragment = { __typename?: 'LiveSlice', id: string, title?: string | null | undefined, embed?: string | null | undefined };

export type QuestionFragment = { __typename?: 'QuestionSlice', id: string, title?: string | null | undefined };

export type ScheduleFragment = { __typename?: 'ScheduleSlice', id: string, title?: string | null | undefined, events: Array<{ __typename?: 'Event', id: string, title?: string | null | undefined, subtitle?: string | null | undefined, startTime?: any | null | undefined, endTime?: any | null | undefined, maybe?: boolean | null | undefined }> };

export type SeoFragment = { __typename?: 'SeoSlice', id: string, title?: string | null | undefined, images: Array<{ __typename?: 'Asset', id: string, height?: number | null | undefined, width?: number | null | undefined, url: string }> };

export type SpeakersFragment = { __typename?: 'SpeakersSlice', id: string, subtitle?: string | null | undefined, title?: string | null | undefined, speakers: Array<{ __typename?: 'Speaker', id: string, name?: string | null | undefined, location?: string | null | undefined, image?: { __typename?: 'Asset', url: string, width?: number | null | undefined, height?: number | null | undefined } | null | undefined }> };

export type ThemeFragment = { __typename?: 'ThemeSlice', id: string, embed?: string | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined };

export const SpacerFragmentDoc = gql`
    fragment Spacer on SpacerAtom {
  id
  height
}
    `;
export const NavbarFragmentDoc = gql`
    fragment Navbar on NavbarMatter {
  id
  logo {
    url
  }
  items {
    ... on Page {
      id
      slug
      title
    }
  }
}
    `;
export const LiveFragmentDoc = gql`
    fragment Live on LiveSlice {
  id
  title
  embed
}
    `;
export const QuestionFragmentDoc = gql`
    fragment Question on QuestionSlice {
  id
  title
}
    `;
export const ScheduleFragmentDoc = gql`
    fragment Schedule on ScheduleSlice {
  id
  title
  events {
    id
    title
    subtitle
    startTime
    endTime
    maybe
  }
}
    `;
export const SeoFragmentDoc = gql`
    fragment Seo on SeoSlice {
  id
  title
  images {
    id
    height
    width
    url
  }
}
    `;
export const SpeakersFragmentDoc = gql`
    fragment Speakers on SpeakersSlice {
  id
  subtitle
  title
  speakers {
    id
    image {
      url(transformation: {image: {resize: {width: 500, height: 500}}})
      width
      height
    }
    name
    location
  }
}
    `;
export const ThemeFragmentDoc = gql`
    fragment Theme on ThemeSlice {
  id
  embed
  title
  subtitle
}
    `;
export const PagesDocument = gql`
    query Pages {
  pages {
    id
    slug
  }
}
    `;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: Apollo.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
      }
export function usePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<PagesQuery, PagesQueryVariables>;
export const PageDocument = gql`
    query Page($slug: String!) {
  page(where: {slug: $slug}) {
    title
    slug
    slices {
      ...Spacer
      ...Navbar
      ...Theme
      ...Schedule
      ...Seo
      ...Speakers
      ...Live
      ...Question
    }
  }
}
    ${SpacerFragmentDoc}
${NavbarFragmentDoc}
${ThemeFragmentDoc}
${ScheduleFragmentDoc}
${SeoFragmentDoc}
${SpeakersFragmentDoc}
${LiveFragmentDoc}
${QuestionFragmentDoc}`;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
      }
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;