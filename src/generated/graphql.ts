import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetchData } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JWT: { input: any; output: any; }
};

export enum ActiveStatus {
  Active = 'Active',
  InActive = 'InActive',
  Locked = 'Locked'
}

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
  user: User;
};

export type Award = {
  __typename?: 'Award';
  _count: AwardCount;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  sortOrder: Scalars['Int']['output'];
  startAt: Scalars['DateTime']['output'];
  status: ActiveStatus;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  userAwards?: Maybe<Array<UserAward>>;
};

export type AwardConnection = {
  __typename?: 'AwardConnection';
  edges?: Maybe<Array<AwardEdge>>;
  nodes?: Maybe<Array<Award>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AwardCount = {
  __typename?: 'AwardCount';
  userAwards: Scalars['Int']['output'];
};

export type AwardCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ActiveStatus>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutAwardInput>;
};

export type AwardCreateManyCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ActiveStatus>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AwardCreateManyCreatedByInputEnvelope = {
  data: Array<AwardCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AwardCreateManyUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ActiveStatus>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AwardCreateManyUpdatedByInputEnvelope = {
  data: Array<AwardCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AwardCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<AwardWhereUniqueInput>>;
};

export type AwardCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<AwardWhereUniqueInput>>;
};

export type AwardCreateNestedOneWithoutUserAwardsInput = {
  connect?: InputMaybe<AwardWhereUniqueInput>;
};

export type AwardCreateOrConnectWithoutCreatedByInput = {
  create: AwardCreateWithoutCreatedByInput;
  where: AwardWhereUniqueInput;
};

export type AwardCreateOrConnectWithoutUpdatedByInput = {
  create: AwardCreateWithoutUpdatedByInput;
  where: AwardWhereUniqueInput;
};

export type AwardCreateOrConnectWithoutUserAwardsInput = {
  create: AwardCreateWithoutUserAwardsInput;
  where: AwardWhereUniqueInput;
};

export type AwardCreateWithoutCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ActiveStatus>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutAwardInput>;
};

export type AwardCreateWithoutUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ActiveStatus>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutAwardInput>;
};

export type AwardCreateWithoutUserAwardsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ActiveStatus>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AwardEdge = {
  __typename?: 'AwardEdge';
  cursor: Scalars['String']['output'];
  node: Award;
};

export type AwardListRelationFilter = {
  every?: InputMaybe<AwardWhereInput>;
  none?: InputMaybe<AwardWhereInput>;
  some?: InputMaybe<AwardWhereInput>;
};

export type AwardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AwardOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnailUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  userAwards?: InputMaybe<UserAwardOrderByRelationAggregateInput>;
};

export enum AwardScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EndAt = 'endAt',
  Id = 'id',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  Note = 'note',
  SortOrder = 'sortOrder',
  StartAt = 'startAt',
  Status = 'status',
  ThumbnailUrl = 'thumbnailUrl',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type AwardScalarWhereInput = {
  AND?: InputMaybe<Array<AwardScalarWhereInput>>;
  NOT?: InputMaybe<Array<AwardScalarWhereInput>>;
  OR?: InputMaybe<Array<AwardScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  endAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  note?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type AwardUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutAwardNestedInput>;
};

export type AwardUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AwardUpdateManyWithWhereWithoutCreatedByInput = {
  data: AwardUpdateManyMutationInput;
  where: AwardScalarWhereInput;
};

export type AwardUpdateManyWithWhereWithoutUpdatedByInput = {
  data: AwardUpdateManyMutationInput;
  where: AwardScalarWhereInput;
};

export type AwardUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<AwardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AwardCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<AwardCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<AwardCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<AwardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AwardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AwardWhereUniqueInput>>;
  set?: InputMaybe<Array<AwardWhereUniqueInput>>;
  update?: InputMaybe<Array<AwardUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<AwardUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<AwardUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type AwardUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<AwardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AwardCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<AwardCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<AwardCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<AwardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AwardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AwardWhereUniqueInput>>;
  set?: InputMaybe<Array<AwardWhereUniqueInput>>;
  update?: InputMaybe<Array<AwardUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<AwardUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<AwardUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type AwardUpdateOneRequiredWithoutUserAwardsNestedInput = {
  connect?: InputMaybe<AwardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AwardCreateOrConnectWithoutUserAwardsInput>;
  create?: InputMaybe<AwardCreateWithoutUserAwardsInput>;
  update?: InputMaybe<AwardUpdateWithoutUserAwardsInput>;
  upsert?: InputMaybe<AwardUpsertWithoutUserAwardsInput>;
};

export type AwardUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: AwardUpdateWithoutCreatedByInput;
  where: AwardWhereUniqueInput;
};

export type AwardUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: AwardUpdateWithoutUpdatedByInput;
  where: AwardWhereUniqueInput;
};

export type AwardUpdateWithoutCreatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutAwardNestedInput>;
};

export type AwardUpdateWithoutUpdatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutAwardNestedInput>;
};

export type AwardUpdateWithoutUserAwardsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AwardUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: AwardCreateWithoutCreatedByInput;
  update: AwardUpdateWithoutCreatedByInput;
  where: AwardWhereUniqueInput;
};

export type AwardUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: AwardCreateWithoutUpdatedByInput;
  update: AwardUpdateWithoutUpdatedByInput;
  where: AwardWhereUniqueInput;
};

export type AwardUpsertWithoutUserAwardsInput = {
  create: AwardCreateWithoutUserAwardsInput;
  update: AwardUpdateWithoutUserAwardsInput;
};

export type AwardWhereInput = {
  AND?: InputMaybe<Array<AwardWhereInput>>;
  NOT?: InputMaybe<Array<AwardWhereInput>>;
  OR?: InputMaybe<Array<AwardWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  endAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  note?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userAwards?: InputMaybe<UserAwardListRelationFilter>;
};

export type AwardWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Banner = {
  __typename?: 'Banner';
  bannerGroup?: Maybe<BannerGroup>;
  bannerGroupId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  urlImage: Scalars['String']['output'];
  urlTarget?: Maybe<Scalars['String']['output']>;
};

export type BannerConnection = {
  __typename?: 'BannerConnection';
  edges?: Maybe<Array<BannerEdge>>;
  nodes?: Maybe<Array<Banner>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BannerCreateInput = {
  bannerGroup?: InputMaybe<BannerGroupCreateNestedOneWithoutBannersInput>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateManyBannerGroupInput = {
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateManyBannerGroupInputEnvelope = {
  data: Array<BannerCreateManyBannerGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerCreateManyCreatedByInput = {
  bannerGroupId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateManyCreatedByInputEnvelope = {
  data: Array<BannerCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerCreateManyInput = {
  bannerGroupId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateManyUpdatedByInput = {
  bannerGroupId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateManyUpdatedByInputEnvelope = {
  data: Array<BannerCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerCreateNestedManyWithoutBannerGroupInput = {
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
};

export type BannerCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
};

export type BannerCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
};

export type BannerCreateOrConnectWithoutBannerGroupInput = {
  create: BannerCreateWithoutBannerGroupInput;
  where: BannerWhereUniqueInput;
};

export type BannerCreateOrConnectWithoutCreatedByInput = {
  create: BannerCreateWithoutCreatedByInput;
  where: BannerWhereUniqueInput;
};

export type BannerCreateOrConnectWithoutUpdatedByInput = {
  create: BannerCreateWithoutUpdatedByInput;
  where: BannerWhereUniqueInput;
};

export type BannerCreateWithoutBannerGroupInput = {
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateWithoutCreatedByInput = {
  bannerGroup?: InputMaybe<BannerGroupCreateNestedOneWithoutBannersInput>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerCreateWithoutUpdatedByInput = {
  bannerGroup?: InputMaybe<BannerGroupCreateNestedOneWithoutBannersInput>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type BannerEdge = {
  __typename?: 'BannerEdge';
  cursor: Scalars['String']['output'];
  node: Banner;
};

export type BannerGroup = {
  __typename?: 'BannerGroup';
  _count: BannerGroupCount;
  banners?: Maybe<Array<Banner>>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionUnAccent?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  status: ActiveStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type BannerGroupConnection = {
  __typename?: 'BannerGroupConnection';
  edges?: Maybe<Array<BannerGroupEdge>>;
  nodes?: Maybe<Array<BannerGroup>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BannerGroupCount = {
  __typename?: 'BannerGroupCount';
  banners: Scalars['Int']['output'];
};

export type BannerGroupCreateInput = {
  banners?: InputMaybe<BannerCreateNestedManyWithoutBannerGroupInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionUnAccent?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type BannerGroupCreateManyCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionUnAccent?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type BannerGroupCreateManyCreatedByInputEnvelope = {
  data: Array<BannerGroupCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerGroupCreateManyUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionUnAccent?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type BannerGroupCreateManyUpdatedByInputEnvelope = {
  data: Array<BannerGroupCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerGroupCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
};

export type BannerGroupCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
};

export type BannerGroupCreateNestedOneWithoutBannersInput = {
  connect?: InputMaybe<BannerGroupWhereUniqueInput>;
};

export type BannerGroupCreateOrConnectWithoutBannersInput = {
  create: BannerGroupCreateWithoutBannersInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupCreateOrConnectWithoutCreatedByInput = {
  create: BannerGroupCreateWithoutCreatedByInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupCreateOrConnectWithoutUpdatedByInput = {
  create: BannerGroupCreateWithoutUpdatedByInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupCreateWithoutBannersInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionUnAccent?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type BannerGroupCreateWithoutCreatedByInput = {
  banners?: InputMaybe<BannerCreateNestedManyWithoutBannerGroupInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionUnAccent?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type BannerGroupCreateWithoutUpdatedByInput = {
  banners?: InputMaybe<BannerCreateNestedManyWithoutBannerGroupInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionUnAccent?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type BannerGroupEdge = {
  __typename?: 'BannerGroupEdge';
  cursor: Scalars['String']['output'];
  node: BannerGroup;
};

export type BannerGroupListRelationFilter = {
  every?: InputMaybe<BannerGroupWhereInput>;
  none?: InputMaybe<BannerGroupWhereInput>;
  some?: InputMaybe<BannerGroupWhereInput>;
};

export type BannerGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BannerGroupOrderByWithRelationInput = {
  banners?: InputMaybe<BannerOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  descriptionUnAccent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  limit?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum BannerGroupScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  DescriptionUnAccent = 'descriptionUnAccent',
  Id = 'id',
  Limit = 'limit',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  Priority = 'priority',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type BannerGroupScalarWhereInput = {
  AND?: InputMaybe<Array<BannerGroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<BannerGroupScalarWhereInput>>;
  OR?: InputMaybe<Array<BannerGroupScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  descriptionUnAccent?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  limit?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type BannerGroupUpdateInput = {
  banners?: InputMaybe<BannerUpdateManyWithoutBannerGroupNestedInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  descriptionUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limit?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type BannerGroupUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  descriptionUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limit?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type BannerGroupUpdateManyWithWhereWithoutCreatedByInput = {
  data: BannerGroupUpdateManyMutationInput;
  where: BannerGroupScalarWhereInput;
};

export type BannerGroupUpdateManyWithWhereWithoutUpdatedByInput = {
  data: BannerGroupUpdateManyMutationInput;
  where: BannerGroupScalarWhereInput;
};

export type BannerGroupUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BannerGroupCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BannerGroupCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BannerGroupCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BannerGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<BannerGroupUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<BannerGroupUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<BannerGroupUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BannerGroupUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BannerGroupCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<BannerGroupCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<BannerGroupCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BannerGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<BannerGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<BannerGroupUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<BannerGroupUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<BannerGroupUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type BannerGroupUpdateOneWithoutBannersNestedInput = {
  connect?: InputMaybe<BannerGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BannerGroupCreateOrConnectWithoutBannersInput>;
  create?: InputMaybe<BannerGroupCreateWithoutBannersInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<BannerGroupUpdateWithoutBannersInput>;
  upsert?: InputMaybe<BannerGroupUpsertWithoutBannersInput>;
};

export type BannerGroupUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BannerGroupUpdateWithoutCreatedByInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: BannerGroupUpdateWithoutUpdatedByInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupUpdateWithoutBannersInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  descriptionUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limit?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type BannerGroupUpdateWithoutCreatedByInput = {
  banners?: InputMaybe<BannerUpdateManyWithoutBannerGroupNestedInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  descriptionUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  limit?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type BannerGroupUpdateWithoutUpdatedByInput = {
  banners?: InputMaybe<BannerUpdateManyWithoutBannerGroupNestedInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  descriptionUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limit?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type BannerGroupUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BannerGroupCreateWithoutCreatedByInput;
  update: BannerGroupUpdateWithoutCreatedByInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: BannerGroupCreateWithoutUpdatedByInput;
  update: BannerGroupUpdateWithoutUpdatedByInput;
  where: BannerGroupWhereUniqueInput;
};

export type BannerGroupUpsertWithoutBannersInput = {
  create: BannerGroupCreateWithoutBannersInput;
  update: BannerGroupUpdateWithoutBannersInput;
};

export type BannerGroupWhereInput = {
  AND?: InputMaybe<Array<BannerGroupWhereInput>>;
  NOT?: InputMaybe<Array<BannerGroupWhereInput>>;
  OR?: InputMaybe<Array<BannerGroupWhereInput>>;
  banners?: InputMaybe<BannerListRelationFilter>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  descriptionUnAccent?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  limit?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type BannerGroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BannerListRelationFilter = {
  every?: InputMaybe<BannerWhereInput>;
  none?: InputMaybe<BannerWhereInput>;
  some?: InputMaybe<BannerWhereInput>;
};

export type BannerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BannerOrderByWithRelationInput = {
  bannerGroup?: InputMaybe<BannerGroupOrderByWithRelationInput>;
  bannerGroupId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  urlImage?: InputMaybe<SortOrder>;
  urlTarget?: InputMaybe<SortOrder>;
};

export enum BannerScalarFieldEnum {
  BannerGroupId = 'bannerGroupId',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Priority = 'priority',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById',
  UrlImage = 'urlImage',
  UrlTarget = 'urlTarget'
}

export type BannerScalarWhereInput = {
  AND?: InputMaybe<Array<BannerScalarWhereInput>>;
  NOT?: InputMaybe<Array<BannerScalarWhereInput>>;
  OR?: InputMaybe<Array<BannerScalarWhereInput>>;
  bannerGroupId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  urlImage?: InputMaybe<StringFilter>;
  urlTarget?: InputMaybe<StringNullableFilter>;
};

export type BannerUpdateInput = {
  bannerGroup?: InputMaybe<BannerGroupUpdateOneWithoutBannersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlTarget?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BannerUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlTarget?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BannerUpdateManyWithWhereWithoutBannerGroupInput = {
  data: BannerUpdateManyMutationInput;
  where: BannerScalarWhereInput;
};

export type BannerUpdateManyWithWhereWithoutCreatedByInput = {
  data: BannerUpdateManyMutationInput;
  where: BannerScalarWhereInput;
};

export type BannerUpdateManyWithWhereWithoutUpdatedByInput = {
  data: BannerUpdateManyMutationInput;
  where: BannerScalarWhereInput;
};

export type BannerUpdateManyWithoutBannerGroupNestedInput = {
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BannerCreateOrConnectWithoutBannerGroupInput>>;
  create?: InputMaybe<Array<BannerCreateWithoutBannerGroupInput>>;
  createMany?: InputMaybe<BannerCreateManyBannerGroupInputEnvelope>;
  delete?: InputMaybe<Array<BannerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BannerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  set?: InputMaybe<Array<BannerWhereUniqueInput>>;
  update?: InputMaybe<Array<BannerUpdateWithWhereUniqueWithoutBannerGroupInput>>;
  updateMany?: InputMaybe<Array<BannerUpdateManyWithWhereWithoutBannerGroupInput>>;
  upsert?: InputMaybe<Array<BannerUpsertWithWhereUniqueWithoutBannerGroupInput>>;
};

export type BannerUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BannerCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BannerCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BannerCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<BannerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BannerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  set?: InputMaybe<Array<BannerWhereUniqueInput>>;
  update?: InputMaybe<Array<BannerUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<BannerUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<BannerUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BannerUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BannerCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<BannerCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<BannerCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<BannerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BannerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BannerWhereUniqueInput>>;
  set?: InputMaybe<Array<BannerWhereUniqueInput>>;
  update?: InputMaybe<Array<BannerUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<BannerUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<BannerUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type BannerUpdateWithWhereUniqueWithoutBannerGroupInput = {
  data: BannerUpdateWithoutBannerGroupInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BannerUpdateWithoutCreatedByInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: BannerUpdateWithoutUpdatedByInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpdateWithoutBannerGroupInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlTarget?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BannerUpdateWithoutCreatedByInput = {
  bannerGroup?: InputMaybe<BannerGroupUpdateOneWithoutBannersNestedInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlTarget?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BannerUpdateWithoutUpdatedByInput = {
  bannerGroup?: InputMaybe<BannerGroupUpdateOneWithoutBannersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlTarget?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BannerUpsertWithWhereUniqueWithoutBannerGroupInput = {
  create: BannerCreateWithoutBannerGroupInput;
  update: BannerUpdateWithoutBannerGroupInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BannerCreateWithoutCreatedByInput;
  update: BannerUpdateWithoutCreatedByInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: BannerCreateWithoutUpdatedByInput;
  update: BannerUpdateWithoutUpdatedByInput;
  where: BannerWhereUniqueInput;
};

export type BannerWhereInput = {
  AND?: InputMaybe<Array<BannerWhereInput>>;
  NOT?: InputMaybe<Array<BannerWhereInput>>;
  OR?: InputMaybe<Array<BannerWhereInput>>;
  bannerGroup?: InputMaybe<BannerGroupWhereInput>;
  bannerGroupId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  urlImage?: InputMaybe<StringFilter>;
  urlTarget?: InputMaybe<StringNullableFilter>;
};

export type BannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  attachments?: Maybe<Scalars['JSON']['output']>;
  content: Scalars['String']['output'];
  contentUnAccent?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  originalContent: Scalars['JSON']['output'];
  owner: User;
  ownerId: Scalars['String']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  status: CommentStatus;
  sticker?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges?: Maybe<Array<CommentEdge>>;
  nodes?: Maybe<Array<Comment>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentCreateManyCreatedByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  ownerId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyCreatedByInputEnvelope = {
  data: Array<CommentCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyOwnerInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  postId: Scalars['String']['input'];
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyOwnerInputEnvelope = {
  data: Array<CommentCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyPostInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  ownerId: Scalars['String']['input'];
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyPostInputEnvelope = {
  data: Array<CommentCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyUpdatedByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  ownerId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyUpdatedByInputEnvelope = {
  data: Array<CommentCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateOrConnectWithoutCreatedByInput = {
  create: CommentCreateWithoutCreatedByInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutOwnerInput = {
  create: CommentCreateWithoutOwnerInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUpdatedByInput = {
  create: CommentCreateWithoutUpdatedByInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutCreatedByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  owner: UserCreateNestedOneWithoutCommentsInput;
  post: PostCreateNestedOneWithoutPostCommentsInput;
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateWithoutOwnerInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  post: PostCreateNestedOneWithoutPostCommentsInput;
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateWithoutPostInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  owner: UserCreateNestedOneWithoutCommentsInput;
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateWithoutUpdatedByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  originalContent: Scalars['JSON']['input'];
  owner: UserCreateNestedOneWithoutCommentsInput;
  post: PostCreateNestedOneWithoutPostCommentsInput;
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  attachments?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  contentUnAccent?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  originalContent?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  sticker?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Attachments = 'attachments',
  Content = 'content',
  ContentUnAccent = 'contentUnAccent',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Id = 'id',
  OriginalContent = 'originalContent',
  OwnerId = 'ownerId',
  PostId = 'postId',
  Status = 'status',
  Sticker = 'sticker',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  attachments?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  originalContent?: InputMaybe<JsonFilter>;
  ownerId?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumCommentStatusFilter>;
  sticker?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export enum CommentStatus {
  Deleted = 'Deleted',
  Published = 'Published',
  Suspended = 'Suspended'
}

export type CommentUpdateManyMutationInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumCommentStatusFieldUpdateOperationsInput>;
  sticker?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutCreatedByInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutOwnerInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUpdatedByInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<CommentCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type CommentUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<CommentCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type CommentUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<CommentCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: CommentUpdateWithoutCreatedByInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutOwnerInput = {
  data: CommentUpdateWithoutOwnerInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: CommentUpdateWithoutUpdatedByInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutCreatedByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostCommentsNestedInput>;
  status?: InputMaybe<EnumCommentStatusFieldUpdateOperationsInput>;
  sticker?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutOwnerInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostCommentsNestedInput>;
  status?: InputMaybe<EnumCommentStatusFieldUpdateOperationsInput>;
  sticker?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  status?: InputMaybe<EnumCommentStatusFieldUpdateOperationsInput>;
  sticker?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutUpdatedByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostCommentsNestedInput>;
  status?: InputMaybe<EnumCommentStatusFieldUpdateOperationsInput>;
  sticker?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: CommentCreateWithoutCreatedByInput;
  update: CommentUpdateWithoutCreatedByInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutOwnerInput = {
  create: CommentCreateWithoutOwnerInput;
  update: CommentUpdateWithoutOwnerInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: CommentCreateWithoutUpdatedByInput;
  update: CommentUpdateWithoutUpdatedByInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  attachments?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  originalContent?: InputMaybe<JsonFilter>;
  owner?: InputMaybe<UserWhereInput>;
  ownerId?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumCommentStatusFilter>;
  sticker?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CountEvent = {
  __typename?: 'CountEvent';
  count: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
};

export type CustomBannerUpdateInput = {
  bannerGroupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  urlImage: Scalars['String']['input'];
  urlTarget?: InputMaybe<Scalars['String']['input']>;
};

export type CustomCommentCreateInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content: Scalars['String']['input'];
  post: PostCreateNestedOneWithoutPostCommentsInput;
  status?: InputMaybe<CommentStatus>;
  sticker?: InputMaybe<Scalars['String']['input']>;
};

export type CustomCommentUpdateInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCommentStatusFieldUpdateOperationsInput>;
  sticker?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomPost = {
  __typename?: 'CustomPost';
  _count: PostCount;
  approveBy?: Maybe<User>;
  approveById?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  head: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isHot?: Maybe<Scalars['Boolean']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  isNotice?: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  postComments?: Maybe<Array<Comment>>;
  postIdeas?: Maybe<Array<PostIdea>>;
  postTags?: Maybe<Array<PostTag>>;
  postTopics?: Maybe<Array<PostTopic>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  pushNotificationDatas?: Maybe<Array<PushNotificationData>>;
  slug?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  status: PostStatus;
  subTitle?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: PostType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  userLikeds?: Maybe<Array<UserLiked>>;
  userVieweds?: Maybe<Array<UserViewed>>;
  userVotes?: Maybe<Array<UserVote>>;
  viewCount: Scalars['Int']['output'];
  voteCount: Scalars['Int']['output'];
};

export type CustomPostConnection = {
  __typename?: 'CustomPostConnection';
  edges?: Maybe<Array<CustomPostEdge>>;
  nodes?: Maybe<Array<CustomPost>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CustomPostEdge = {
  __typename?: 'CustomPostEdge';
  cursor: Scalars['String']['output'];
  node: CustomPost;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Department = {
  __typename?: 'Department';
  _count: DepartmentCount;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  feedbacks?: Maybe<Array<Feedback>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Array<Question>>;
  sortOrder: Scalars['Int']['output'];
  status: ActiveStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  userAward?: Maybe<Array<UserAward>>;
  userDepartments?: Maybe<Array<UserDepartment>>;
  users?: Maybe<Array<User>>;
};

export type DepartmentConnection = {
  __typename?: 'DepartmentConnection';
  edges?: Maybe<Array<DepartmentEdge>>;
  nodes?: Maybe<Array<Department>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DepartmentCount = {
  __typename?: 'DepartmentCount';
  feedbacks: Scalars['Int']['output'];
  questions: Scalars['Int']['output'];
  userAward: Scalars['Int']['output'];
  userDepartments: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type DepartmentCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateManyCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type DepartmentCreateManyCreatedByInputEnvelope = {
  data: Array<DepartmentCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DepartmentCreateManyUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type DepartmentCreateManyUpdatedByInputEnvelope = {
  data: Array<DepartmentCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DepartmentCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
};

export type DepartmentCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
};

export type DepartmentCreateNestedOneWithoutFeedbacksInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
};

export type DepartmentCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
};

export type DepartmentCreateNestedOneWithoutUserAwardInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
};

export type DepartmentCreateNestedOneWithoutUserDepartmentsInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
};

export type DepartmentCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
};

export type DepartmentCreateOrConnectWithoutCreatedByInput = {
  create: DepartmentCreateWithoutCreatedByInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutFeedbacksInput = {
  create: DepartmentCreateWithoutFeedbacksInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutQuestionsInput = {
  create: DepartmentCreateWithoutQuestionsInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutUpdatedByInput = {
  create: DepartmentCreateWithoutUpdatedByInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutUserAwardInput = {
  create: DepartmentCreateWithoutUserAwardInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutUserDepartmentsInput = {
  create: DepartmentCreateWithoutUserDepartmentsInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateOrConnectWithoutUsersInput = {
  create: DepartmentCreateWithoutUsersInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateWithoutCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateWithoutFeedbacksInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateWithoutQuestionsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateWithoutUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateWithoutUserAwardInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateWithoutUserDepartmentsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateWithoutUsersInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutDepartmentInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutDepartmentInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userAward?: InputMaybe<UserAwardCreateNestedManyWithoutDepartmentInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentEdge = {
  __typename?: 'DepartmentEdge';
  cursor: Scalars['String']['output'];
  node: Department;
};

export type DepartmentListRelationFilter = {
  every?: InputMaybe<DepartmentWhereInput>;
  none?: InputMaybe<DepartmentWhereInput>;
  some?: InputMaybe<DepartmentWhereInput>;
};

export type DepartmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DepartmentOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  userAward?: InputMaybe<UserAwardOrderByRelationAggregateInput>;
  userDepartments?: InputMaybe<UserDepartmentOrderByRelationAggregateInput>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export enum DepartmentScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  SortOrder = 'sortOrder',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type DepartmentScalarWhereInput = {
  AND?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  OR?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type DepartmentUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type DepartmentUpdateManyWithWhereWithoutCreatedByInput = {
  data: DepartmentUpdateManyMutationInput;
  where: DepartmentScalarWhereInput;
};

export type DepartmentUpdateManyWithWhereWithoutUpdatedByInput = {
  data: DepartmentUpdateManyMutationInput;
  where: DepartmentScalarWhereInput;
};

export type DepartmentUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<DepartmentCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<DepartmentCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  set?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  update?: InputMaybe<Array<DepartmentUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<DepartmentUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<DepartmentUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type DepartmentUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<DepartmentCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<DepartmentCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DepartmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  set?: InputMaybe<Array<DepartmentWhereUniqueInput>>;
  update?: InputMaybe<Array<DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<DepartmentUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type DepartmentUpdateOneRequiredWithoutFeedbacksNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutFeedbacksInput>;
  create?: InputMaybe<DepartmentCreateWithoutFeedbacksInput>;
  update?: InputMaybe<DepartmentUpdateWithoutFeedbacksInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutFeedbacksInput>;
};

export type DepartmentUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<DepartmentCreateWithoutQuestionsInput>;
  update?: InputMaybe<DepartmentUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutQuestionsInput>;
};

export type DepartmentUpdateOneRequiredWithoutUserDepartmentsNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutUserDepartmentsInput>;
  create?: InputMaybe<DepartmentCreateWithoutUserDepartmentsInput>;
  update?: InputMaybe<DepartmentUpdateWithoutUserDepartmentsInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutUserDepartmentsInput>;
};

export type DepartmentUpdateOneWithoutUserAwardNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutUserAwardInput>;
  create?: InputMaybe<DepartmentCreateWithoutUserAwardInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<DepartmentUpdateWithoutUserAwardInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutUserAwardInput>;
};

export type DepartmentUpdateOneWithoutUsersNestedInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<DepartmentCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<DepartmentUpdateWithoutUsersInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutUsersInput>;
};

export type DepartmentUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: DepartmentUpdateWithoutCreatedByInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: DepartmentUpdateWithoutUpdatedByInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpdateWithoutCreatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutDepartmentNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutDepartmentNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userAward?: InputMaybe<UserAwardUpdateManyWithoutDepartmentNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutDepartmentNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpdateWithoutFeedbacksInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutDepartmentNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userAward?: InputMaybe<UserAwardUpdateManyWithoutDepartmentNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutDepartmentNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpdateWithoutQuestionsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userAward?: InputMaybe<UserAwardUpdateManyWithoutDepartmentNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutDepartmentNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpdateWithoutUpdatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutDepartmentNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userAward?: InputMaybe<UserAwardUpdateManyWithoutDepartmentNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutDepartmentNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpdateWithoutUserAwardInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutDepartmentNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutDepartmentNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpdateWithoutUserDepartmentsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutDepartmentNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userAward?: InputMaybe<UserAwardUpdateManyWithoutDepartmentNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpdateWithoutUsersInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutDepartmentNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutDepartmentNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userAward?: InputMaybe<UserAwardUpdateManyWithoutDepartmentNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutDepartmentNestedInput>;
};

export type DepartmentUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: DepartmentCreateWithoutCreatedByInput;
  update: DepartmentUpdateWithoutCreatedByInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: DepartmentCreateWithoutUpdatedByInput;
  update: DepartmentUpdateWithoutUpdatedByInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpsertWithoutFeedbacksInput = {
  create: DepartmentCreateWithoutFeedbacksInput;
  update: DepartmentUpdateWithoutFeedbacksInput;
};

export type DepartmentUpsertWithoutQuestionsInput = {
  create: DepartmentCreateWithoutQuestionsInput;
  update: DepartmentUpdateWithoutQuestionsInput;
};

export type DepartmentUpsertWithoutUserAwardInput = {
  create: DepartmentCreateWithoutUserAwardInput;
  update: DepartmentUpdateWithoutUserAwardInput;
};

export type DepartmentUpsertWithoutUserDepartmentsInput = {
  create: DepartmentCreateWithoutUserDepartmentsInput;
  update: DepartmentUpdateWithoutUserDepartmentsInput;
};

export type DepartmentUpsertWithoutUsersInput = {
  create: DepartmentCreateWithoutUsersInput;
  update: DepartmentUpdateWithoutUsersInput;
};

export type DepartmentWhereInput = {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  feedbacks?: InputMaybe<FeedbackListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userAward?: InputMaybe<UserAwardListRelationFilter>;
  userDepartments?: InputMaybe<UserDepartmentListRelationFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type DepartmentWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EnumActiveStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<ActiveStatus>;
};

export type EnumActiveStatusFilter = {
  equals?: InputMaybe<ActiveStatus>;
  in?: InputMaybe<Array<ActiveStatus>>;
  not?: InputMaybe<NestedEnumActiveStatusFilter>;
  notIn?: InputMaybe<Array<ActiveStatus>>;
};

export type EnumCommentStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<CommentStatus>;
};

export type EnumCommentStatusFilter = {
  equals?: InputMaybe<CommentStatus>;
  in?: InputMaybe<Array<CommentStatus>>;
  not?: InputMaybe<NestedEnumCommentStatusFilter>;
  notIn?: InputMaybe<Array<CommentStatus>>;
};

export type EnumFeedbackStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<FeedbackStatus>;
};

export type EnumFeedbackStatusFilter = {
  equals?: InputMaybe<FeedbackStatus>;
  in?: InputMaybe<Array<FeedbackStatus>>;
  not?: InputMaybe<NestedEnumFeedbackStatusFilter>;
  notIn?: InputMaybe<Array<FeedbackStatus>>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumLogActionNullableFilter = {
  equals?: InputMaybe<LogAction>;
  in?: InputMaybe<Array<LogAction>>;
  not?: InputMaybe<NestedEnumLogActionNullableFilter>;
  notIn?: InputMaybe<Array<LogAction>>;
};

export type EnumPostStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PostStatus>;
};

export type EnumPostStatusFilter = {
  equals?: InputMaybe<PostStatus>;
  in?: InputMaybe<Array<PostStatus>>;
  not?: InputMaybe<NestedEnumPostStatusFilter>;
  notIn?: InputMaybe<Array<PostStatus>>;
};

export type EnumPostTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PostType>;
};

export type EnumPostTypeFilter = {
  equals?: InputMaybe<PostType>;
  in?: InputMaybe<Array<PostType>>;
  not?: InputMaybe<NestedEnumPostTypeFilter>;
  notIn?: InputMaybe<Array<PostType>>;
};

export type EnumPublishStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PublishStatus>;
};

export type EnumPublishStatusFilter = {
  equals?: InputMaybe<PublishStatus>;
  in?: InputMaybe<Array<PublishStatus>>;
  not?: InputMaybe<NestedEnumPublishStatusFilter>;
  notIn?: InputMaybe<Array<PublishStatus>>;
};

export type EnumPushTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PushType>;
};

export type EnumPushTypeFilter = {
  equals?: InputMaybe<PushType>;
  in?: InputMaybe<Array<PushType>>;
  not?: InputMaybe<NestedEnumPushTypeFilter>;
  notIn?: InputMaybe<Array<PushType>>;
};

export type EnumQuestionStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<QuestionStatus>;
};

export type EnumQuestionStatusFilter = {
  equals?: InputMaybe<QuestionStatus>;
  in?: InputMaybe<Array<QuestionStatus>>;
  not?: InputMaybe<NestedEnumQuestionStatusFilter>;
  notIn?: InputMaybe<Array<QuestionStatus>>;
};

export type EnumTargetTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TargetType>;
};

export type EnumTargetTypeFilter = {
  equals?: InputMaybe<TargetType>;
  in?: InputMaybe<Array<TargetType>>;
  not?: InputMaybe<NestedEnumTargetTypeFilter>;
  notIn?: InputMaybe<Array<TargetType>>;
};

export type EnumTargetTypeNullableFilter = {
  equals?: InputMaybe<TargetType>;
  in?: InputMaybe<Array<TargetType>>;
  not?: InputMaybe<NestedEnumTargetTypeNullableFilter>;
  notIn?: InputMaybe<Array<TargetType>>;
};

export type EnumTopicTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TopicType>;
};

export type EnumTopicTypeFilter = {
  equals?: InputMaybe<TopicType>;
  in?: InputMaybe<Array<TopicType>>;
  not?: InputMaybe<NestedEnumTopicTypeFilter>;
  notIn?: InputMaybe<Array<TopicType>>;
};

export type Event = {
  __typename?: 'Event';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  startAt: Scalars['DateTime']['output'];
  status: ActiveStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<EventEdge>>;
  nodes?: Maybe<Array<Event>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['DateTime']['input'];
  status?: InputMaybe<ActiveStatus>;
};

export type EventCreateManyCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['DateTime']['input'];
  status?: InputMaybe<ActiveStatus>;
};

export type EventCreateManyCreatedByInputEnvelope = {
  data: Array<EventCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventCreateManyInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['DateTime']['input'];
  status?: InputMaybe<ActiveStatus>;
};

export type EventCreateManyUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['DateTime']['input'];
  status?: InputMaybe<ActiveStatus>;
};

export type EventCreateManyUpdatedByInputEnvelope = {
  data: Array<EventCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateOrConnectWithoutCreatedByInput = {
  create: EventCreateWithoutCreatedByInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutUpdatedByInput = {
  create: EventCreateWithoutUpdatedByInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['DateTime']['input'];
  status?: InputMaybe<ActiveStatus>;
};

export type EventCreateWithoutUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  startAt: Scalars['DateTime']['input'];
  status?: InputMaybe<ActiveStatus>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EventOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  place?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum EventScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EndAt = 'endAt',
  Id = 'id',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  Place = 'place',
  StartAt = 'startAt',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type EventScalarWhereInput = {
  AND?: InputMaybe<Array<EventScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereInput>>;
  OR?: InputMaybe<Array<EventScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  endAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  place?: InputMaybe<StringNullableFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type EventUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  place?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type EventUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  place?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type EventUpdateManyWithWhereWithoutCreatedByInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutUpdatedByInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<EventCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type EventUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<EventCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<EventCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: EventUpdateWithoutCreatedByInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: EventUpdateWithoutUpdatedByInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithoutCreatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  place?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutUpdatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  place?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: EventCreateWithoutCreatedByInput;
  update: EventUpdateWithoutCreatedByInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: EventCreateWithoutUpdatedByInput;
  update: EventUpdateWithoutUpdatedByInput;
  where: EventWhereUniqueInput;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  endAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  place?: InputMaybe<StringNullableFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type EventWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  approveBy?: Maybe<User>;
  approveById?: Maybe<Scalars['String']['output']>;
  attachment?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contentUnAccent?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  department: Department;
  departmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industry: Industry;
  industryId: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  originalContent?: Maybe<Scalars['JSON']['output']>;
  replyContent?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: FeedbackStatus;
  title: Scalars['String']['output'];
  titleUnAccent?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type FeedbackConnection = {
  __typename?: 'FeedbackConnection';
  edges?: Maybe<Array<FeedbackEdge>>;
  nodes?: Maybe<Array<Feedback>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FeedbackCreateInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutFeedbacksInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutFeedbacksInput;
  industry: IndustryCreateNestedOneWithoutFeedbacksInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyApproveByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyApproveByInputEnvelope = {
  data: Array<FeedbackCreateManyApproveByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeedbackCreateManyCreatedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyCreatedByInputEnvelope = {
  data: Array<FeedbackCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeedbackCreateManyDepartmentInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyDepartmentInputEnvelope = {
  data: Array<FeedbackCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeedbackCreateManyIndustryInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyIndustryInputEnvelope = {
  data: Array<FeedbackCreateManyIndustryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeedbackCreateManyInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyUpdatedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateManyUpdatedByInputEnvelope = {
  data: Array<FeedbackCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeedbackCreateNestedManyWithoutApproveByInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
};

export type FeedbackCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
};

export type FeedbackCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
};

export type FeedbackCreateNestedManyWithoutIndustryInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
};

export type FeedbackCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
};

export type FeedbackCreateOrConnectWithoutApproveByInput = {
  create: FeedbackCreateWithoutApproveByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateOrConnectWithoutCreatedByInput = {
  create: FeedbackCreateWithoutCreatedByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateOrConnectWithoutDepartmentInput = {
  create: FeedbackCreateWithoutDepartmentInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateOrConnectWithoutIndustryInput = {
  create: FeedbackCreateWithoutIndustryInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateOrConnectWithoutUpdatedByInput = {
  create: FeedbackCreateWithoutUpdatedByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateWithoutApproveByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutFeedbacksInput;
  industry: IndustryCreateNestedOneWithoutFeedbacksInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateWithoutCreatedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutFeedbacksInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutFeedbacksInput;
  industry: IndustryCreateNestedOneWithoutFeedbacksInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateWithoutDepartmentInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutFeedbacksInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  industry: IndustryCreateNestedOneWithoutFeedbacksInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateWithoutIndustryInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutFeedbacksInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutFeedbacksInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackCreateWithoutUpdatedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutFeedbacksInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutFeedbacksInput;
  industry: IndustryCreateNestedOneWithoutFeedbacksInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<FeedbackStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type FeedbackEdge = {
  __typename?: 'FeedbackEdge';
  cursor: Scalars['String']['output'];
  node: Feedback;
};

export type FeedbackListRelationFilter = {
  every?: InputMaybe<FeedbackWhereInput>;
  none?: InputMaybe<FeedbackWhereInput>;
  some?: InputMaybe<FeedbackWhereInput>;
};

export type FeedbackOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FeedbackOrderByWithRelationInput = {
  approveBy?: InputMaybe<UserOrderByWithRelationInput>;
  approveById?: InputMaybe<SortOrder>;
  attachment?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  contentUnAccent?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  departmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<IndustryOrderByWithRelationInput>;
  industryId?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  originalContent?: InputMaybe<SortOrder>;
  replyContent?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleUnAccent?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum FeedbackScalarFieldEnum {
  ApproveById = 'approveById',
  Attachment = 'attachment',
  Content = 'content',
  ContentUnAccent = 'contentUnAccent',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  DepartmentId = 'departmentId',
  Id = 'id',
  IndustryId = 'industryId',
  Note = 'note',
  OriginalContent = 'originalContent',
  ReplyContent = 'replyContent',
  Slug = 'slug',
  Status = 'status',
  Title = 'title',
  TitleUnAccent = 'titleUnAccent',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type FeedbackScalarWhereInput = {
  AND?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  NOT?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  OR?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  approveById?: InputMaybe<StringNullableFilter>;
  attachment?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  departmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  industryId?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  originalContent?: InputMaybe<JsonNullableFilter>;
  replyContent?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumFeedbackStatusFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export enum FeedbackStatus {
  Approved = 'Approved',
  Duplicate = 'Duplicate',
  Rejected = 'Rejected',
  Resolved = 'Resolved',
  WaitingForApproval = 'WaitingForApproval'
}

export type FeedbackUpdateInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutFeedbacksNestedInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutFeedbacksNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutFeedbacksNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpdateManyMutationInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpdateManyWithWhereWithoutApproveByInput = {
  data: FeedbackUpdateManyMutationInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithWhereWithoutCreatedByInput = {
  data: FeedbackUpdateManyMutationInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithWhereWithoutDepartmentInput = {
  data: FeedbackUpdateManyMutationInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithWhereWithoutIndustryInput = {
  data: FeedbackUpdateManyMutationInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithWhereWithoutUpdatedByInput = {
  data: FeedbackUpdateManyMutationInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithoutApproveByNestedInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedbackCreateOrConnectWithoutApproveByInput>>;
  create?: InputMaybe<Array<FeedbackCreateWithoutApproveByInput>>;
  createMany?: InputMaybe<FeedbackCreateManyApproveByInputEnvelope>;
  delete?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedbackUpdateWithWhereUniqueWithoutApproveByInput>>;
  updateMany?: InputMaybe<Array<FeedbackUpdateManyWithWhereWithoutApproveByInput>>;
  upsert?: InputMaybe<Array<FeedbackUpsertWithWhereUniqueWithoutApproveByInput>>;
};

export type FeedbackUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedbackCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<FeedbackCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<FeedbackCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedbackUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<FeedbackUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<FeedbackUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type FeedbackUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedbackCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<FeedbackCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<FeedbackCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedbackUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<FeedbackUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<FeedbackUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type FeedbackUpdateManyWithoutIndustryNestedInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedbackCreateOrConnectWithoutIndustryInput>>;
  create?: InputMaybe<Array<FeedbackCreateWithoutIndustryInput>>;
  createMany?: InputMaybe<FeedbackCreateManyIndustryInputEnvelope>;
  delete?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedbackUpdateWithWhereUniqueWithoutIndustryInput>>;
  updateMany?: InputMaybe<Array<FeedbackUpdateManyWithWhereWithoutIndustryInput>>;
  upsert?: InputMaybe<Array<FeedbackUpsertWithWhereUniqueWithoutIndustryInput>>;
};

export type FeedbackUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedbackCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<FeedbackCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<FeedbackCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedbackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedbackUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<FeedbackUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<FeedbackUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type FeedbackUpdateWithWhereUniqueWithoutApproveByInput = {
  data: FeedbackUpdateWithoutApproveByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: FeedbackUpdateWithoutCreatedByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: FeedbackUpdateWithoutDepartmentInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithWhereUniqueWithoutIndustryInput = {
  data: FeedbackUpdateWithoutIndustryInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: FeedbackUpdateWithoutUpdatedByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithoutApproveByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutFeedbacksNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutFeedbacksNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpdateWithoutCreatedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutFeedbacksNestedInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutFeedbacksNestedInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutFeedbacksNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpdateWithoutDepartmentInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutFeedbacksNestedInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutFeedbacksNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpdateWithoutIndustryInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutFeedbacksNestedInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutFeedbacksNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpdateWithoutUpdatedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutFeedbacksNestedInput>;
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutFeedbacksNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutFeedbacksNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumFeedbackStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedbackUpsertWithWhereUniqueWithoutApproveByInput = {
  create: FeedbackCreateWithoutApproveByInput;
  update: FeedbackUpdateWithoutApproveByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: FeedbackCreateWithoutCreatedByInput;
  update: FeedbackUpdateWithoutCreatedByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: FeedbackCreateWithoutDepartmentInput;
  update: FeedbackUpdateWithoutDepartmentInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertWithWhereUniqueWithoutIndustryInput = {
  create: FeedbackCreateWithoutIndustryInput;
  update: FeedbackUpdateWithoutIndustryInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: FeedbackCreateWithoutUpdatedByInput;
  update: FeedbackUpdateWithoutUpdatedByInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackWhereInput = {
  AND?: InputMaybe<Array<FeedbackWhereInput>>;
  NOT?: InputMaybe<Array<FeedbackWhereInput>>;
  OR?: InputMaybe<Array<FeedbackWhereInput>>;
  approveBy?: InputMaybe<UserWhereInput>;
  approveById?: InputMaybe<StringNullableFilter>;
  attachment?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  department?: InputMaybe<DepartmentWhereInput>;
  departmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  industry?: InputMaybe<IndustryWhereInput>;
  industryId?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  originalContent?: InputMaybe<JsonNullableFilter>;
  replyContent?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumFeedbackStatusFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type FeedbackWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male'
}

export type Idea = {
  __typename?: 'Idea';
  _count: IdeaCount;
  attachment?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contentUnAccent?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ideaTags?: Maybe<Array<IdeaTag>>;
  ideaTopics?: Maybe<Array<IdeaTopic>>;
  note?: Maybe<Scalars['String']['output']>;
  originalContent?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']['output']>;
  postIdeas?: Maybe<Array<PostIdea>>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ActiveStatus;
  title: Scalars['String']['output'];
  titleUnAccent?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  userVotes?: Maybe<Array<UserVote>>;
};

export type IdeaConnection = {
  __typename?: 'IdeaConnection';
  edges?: Maybe<Array<IdeaEdge>>;
  nodes?: Maybe<Array<Idea>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdeaCount = {
  __typename?: 'IdeaCount';
  ideaTags: Scalars['Int']['output'];
  ideaTopics: Scalars['Int']['output'];
  postIdeas: Scalars['Int']['output'];
  userVotes: Scalars['Int']['output'];
};

export type IdeaCreateInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateManyCreatedByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type IdeaCreateManyCreatedByInputEnvelope = {
  data: Array<IdeaCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaCreateManyOwnerInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type IdeaCreateManyOwnerInputEnvelope = {
  data: Array<IdeaCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaCreateManyUpdatedByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type IdeaCreateManyUpdatedByInputEnvelope = {
  data: Array<IdeaCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
};

export type IdeaCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
};

export type IdeaCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
};

export type IdeaCreateNestedOneWithoutIdeaTagsInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
};

export type IdeaCreateNestedOneWithoutIdeaTopicsInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
};

export type IdeaCreateNestedOneWithoutPostIdeasInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
};

export type IdeaCreateNestedOneWithoutUserVotesInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
};

export type IdeaCreateOrConnectWithoutCreatedByInput = {
  create: IdeaCreateWithoutCreatedByInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutIdeaTagsInput = {
  create: IdeaCreateWithoutIdeaTagsInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutIdeaTopicsInput = {
  create: IdeaCreateWithoutIdeaTopicsInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutOwnerInput = {
  create: IdeaCreateWithoutOwnerInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutPostIdeasInput = {
  create: IdeaCreateWithoutPostIdeasInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutUpdatedByInput = {
  create: IdeaCreateWithoutUpdatedByInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutUserVotesInput = {
  create: IdeaCreateWithoutUserVotesInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateWithoutCreatedByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateWithoutIdeaTagsInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateWithoutIdeaTopicsInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateWithoutOwnerInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateWithoutPostIdeasInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateWithoutUpdatedByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutIdeaInput>;
};

export type IdeaCreateWithoutUserVotesInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutIdeaInput>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutIdeaInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutIdeasInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutIdeaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type IdeaEdge = {
  __typename?: 'IdeaEdge';
  cursor: Scalars['String']['output'];
  node: Idea;
};

export type IdeaListRelationFilter = {
  every?: InputMaybe<IdeaWhereInput>;
  none?: InputMaybe<IdeaWhereInput>;
  some?: InputMaybe<IdeaWhereInput>;
};

export type IdeaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IdeaOrderByWithRelationInput = {
  attachment?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  contentUnAccent?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ideaTags?: InputMaybe<IdeaTagOrderByRelationAggregateInput>;
  ideaTopics?: InputMaybe<IdeaTopicOrderByRelationAggregateInput>;
  note?: InputMaybe<SortOrder>;
  originalContent?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  postIdeas?: InputMaybe<PostIdeaOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleUnAccent?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  userVotes?: InputMaybe<UserVoteOrderByRelationAggregateInput>;
};

export enum IdeaScalarFieldEnum {
  Attachment = 'attachment',
  Content = 'content',
  ContentUnAccent = 'contentUnAccent',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Note = 'note',
  OriginalContent = 'originalContent',
  OwnerId = 'ownerId',
  Slug = 'slug',
  Status = 'status',
  Title = 'title',
  TitleUnAccent = 'titleUnAccent',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type IdeaScalarWhereInput = {
  AND?: InputMaybe<Array<IdeaScalarWhereInput>>;
  NOT?: InputMaybe<Array<IdeaScalarWhereInput>>;
  OR?: InputMaybe<Array<IdeaScalarWhereInput>>;
  attachment?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  originalContent?: InputMaybe<JsonNullableFilter>;
  ownerId?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type IdeaTag = {
  __typename?: 'IdeaTag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  idea: Idea;
  ideaId: Scalars['String']['output'];
  tag: Tag;
  tagId: Scalars['String']['output'];
};

export type IdeaTagConnection = {
  __typename?: 'IdeaTagConnection';
  edges?: Maybe<Array<IdeaTagEdge>>;
  nodes?: Maybe<Array<IdeaTag>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdeaTagCreateManyIdeaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  tagId: Scalars['String']['input'];
};

export type IdeaTagCreateManyIdeaInputEnvelope = {
  data: Array<IdeaTagCreateManyIdeaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaTagCreateManyTagInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
};

export type IdeaTagCreateManyTagInputEnvelope = {
  data: Array<IdeaTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaTagCreateNestedManyWithoutIdeaInput = {
  connect?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
};

export type IdeaTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
};

export type IdeaTagCreateOrConnectWithoutIdeaInput = {
  create: IdeaTagCreateWithoutIdeaInput;
  where: IdeaTagWhereUniqueInput;
};

export type IdeaTagCreateOrConnectWithoutTagInput = {
  create: IdeaTagCreateWithoutTagInput;
  where: IdeaTagWhereUniqueInput;
};

export type IdeaTagCreateWithoutIdeaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  tag: TagCreateNestedOneWithoutIdeaTagsInput;
};

export type IdeaTagCreateWithoutTagInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutIdeaTagsInput;
};

export type IdeaTagEdge = {
  __typename?: 'IdeaTagEdge';
  cursor: Scalars['String']['output'];
  node: IdeaTag;
};

export type IdeaTagListRelationFilter = {
  every?: InputMaybe<IdeaTagWhereInput>;
  none?: InputMaybe<IdeaTagWhereInput>;
  some?: InputMaybe<IdeaTagWhereInput>;
};

export type IdeaTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IdeaTagOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  idea?: InputMaybe<IdeaOrderByWithRelationInput>;
  ideaId?: InputMaybe<SortOrder>;
  tag?: InputMaybe<TagOrderByWithRelationInput>;
  tagId?: InputMaybe<SortOrder>;
};

export enum IdeaTagScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  IdeaId = 'ideaId',
  TagId = 'tagId'
}

export type IdeaTagScalarWhereInput = {
  AND?: InputMaybe<Array<IdeaTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<IdeaTagScalarWhereInput>>;
  OR?: InputMaybe<Array<IdeaTagScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ideaId?: InputMaybe<StringFilter>;
  tagId?: InputMaybe<StringFilter>;
};

export type IdeaTagUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type IdeaTagUpdateManyWithWhereWithoutIdeaInput = {
  data: IdeaTagUpdateManyMutationInput;
  where: IdeaTagScalarWhereInput;
};

export type IdeaTagUpdateManyWithWhereWithoutTagInput = {
  data: IdeaTagUpdateManyMutationInput;
  where: IdeaTagScalarWhereInput;
};

export type IdeaTagUpdateManyWithoutIdeaNestedInput = {
  connect?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaTagCreateOrConnectWithoutIdeaInput>>;
  create?: InputMaybe<Array<IdeaTagCreateWithoutIdeaInput>>;
  createMany?: InputMaybe<IdeaTagCreateManyIdeaInputEnvelope>;
  delete?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaTagUpdateWithWhereUniqueWithoutIdeaInput>>;
  updateMany?: InputMaybe<Array<IdeaTagUpdateManyWithWhereWithoutIdeaInput>>;
  upsert?: InputMaybe<Array<IdeaTagUpsertWithWhereUniqueWithoutIdeaInput>>;
};

export type IdeaTagUpdateManyWithoutTagNestedInput = {
  connect?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<IdeaTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<IdeaTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaTagWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<IdeaTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<IdeaTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type IdeaTagUpdateWithWhereUniqueWithoutIdeaInput = {
  data: IdeaTagUpdateWithoutIdeaInput;
  where: IdeaTagWhereUniqueInput;
};

export type IdeaTagUpdateWithWhereUniqueWithoutTagInput = {
  data: IdeaTagUpdateWithoutTagInput;
  where: IdeaTagWhereUniqueInput;
};

export type IdeaTagUpdateWithoutIdeaInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutIdeaTagsNestedInput>;
};

export type IdeaTagUpdateWithoutTagInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutIdeaTagsNestedInput>;
};

export type IdeaTagUpsertWithWhereUniqueWithoutIdeaInput = {
  create: IdeaTagCreateWithoutIdeaInput;
  update: IdeaTagUpdateWithoutIdeaInput;
  where: IdeaTagWhereUniqueInput;
};

export type IdeaTagUpsertWithWhereUniqueWithoutTagInput = {
  create: IdeaTagCreateWithoutTagInput;
  update: IdeaTagUpdateWithoutTagInput;
  where: IdeaTagWhereUniqueInput;
};

export type IdeaTagWhereInput = {
  AND?: InputMaybe<Array<IdeaTagWhereInput>>;
  NOT?: InputMaybe<Array<IdeaTagWhereInput>>;
  OR?: InputMaybe<Array<IdeaTagWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  idea?: InputMaybe<IdeaWhereInput>;
  ideaId?: InputMaybe<StringFilter>;
  tag?: InputMaybe<TagWhereInput>;
  tagId?: InputMaybe<StringFilter>;
};

export type IdeaTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IdeaTopic = {
  __typename?: 'IdeaTopic';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  idea: Idea;
  ideaId: Scalars['String']['output'];
  topic: Topic;
  topicId: Scalars['String']['output'];
};

export type IdeaTopicConnection = {
  __typename?: 'IdeaTopicConnection';
  edges?: Maybe<Array<IdeaTopicEdge>>;
  nodes?: Maybe<Array<IdeaTopic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdeaTopicCreateManyIdeaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  topicId: Scalars['String']['input'];
};

export type IdeaTopicCreateManyIdeaInputEnvelope = {
  data: Array<IdeaTopicCreateManyIdeaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaTopicCreateManyTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
};

export type IdeaTopicCreateManyTopicInputEnvelope = {
  data: Array<IdeaTopicCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdeaTopicCreateNestedManyWithoutIdeaInput = {
  connect?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
};

export type IdeaTopicCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
};

export type IdeaTopicCreateOrConnectWithoutIdeaInput = {
  create: IdeaTopicCreateWithoutIdeaInput;
  where: IdeaTopicWhereUniqueInput;
};

export type IdeaTopicCreateOrConnectWithoutTopicInput = {
  create: IdeaTopicCreateWithoutTopicInput;
  where: IdeaTopicWhereUniqueInput;
};

export type IdeaTopicCreateWithoutIdeaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  topic: TopicCreateNestedOneWithoutIdeaTopicsInput;
};

export type IdeaTopicCreateWithoutTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutIdeaTopicsInput;
};

export type IdeaTopicEdge = {
  __typename?: 'IdeaTopicEdge';
  cursor: Scalars['String']['output'];
  node: IdeaTopic;
};

export type IdeaTopicListRelationFilter = {
  every?: InputMaybe<IdeaTopicWhereInput>;
  none?: InputMaybe<IdeaTopicWhereInput>;
  some?: InputMaybe<IdeaTopicWhereInput>;
};

export type IdeaTopicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IdeaTopicOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  idea?: InputMaybe<IdeaOrderByWithRelationInput>;
  ideaId?: InputMaybe<SortOrder>;
  topic?: InputMaybe<TopicOrderByWithRelationInput>;
  topicId?: InputMaybe<SortOrder>;
};

export enum IdeaTopicScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  IdeaId = 'ideaId',
  TopicId = 'topicId'
}

export type IdeaTopicScalarWhereInput = {
  AND?: InputMaybe<Array<IdeaTopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<IdeaTopicScalarWhereInput>>;
  OR?: InputMaybe<Array<IdeaTopicScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ideaId?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<StringFilter>;
};

export type IdeaTopicUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type IdeaTopicUpdateManyWithWhereWithoutIdeaInput = {
  data: IdeaTopicUpdateManyMutationInput;
  where: IdeaTopicScalarWhereInput;
};

export type IdeaTopicUpdateManyWithWhereWithoutTopicInput = {
  data: IdeaTopicUpdateManyMutationInput;
  where: IdeaTopicScalarWhereInput;
};

export type IdeaTopicUpdateManyWithoutIdeaNestedInput = {
  connect?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaTopicCreateOrConnectWithoutIdeaInput>>;
  create?: InputMaybe<Array<IdeaTopicCreateWithoutIdeaInput>>;
  createMany?: InputMaybe<IdeaTopicCreateManyIdeaInputEnvelope>;
  delete?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaTopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaTopicUpdateWithWhereUniqueWithoutIdeaInput>>;
  updateMany?: InputMaybe<Array<IdeaTopicUpdateManyWithWhereWithoutIdeaInput>>;
  upsert?: InputMaybe<Array<IdeaTopicUpsertWithWhereUniqueWithoutIdeaInput>>;
};

export type IdeaTopicUpdateManyWithoutTopicNestedInput = {
  connect?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaTopicCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<IdeaTopicCreateWithoutTopicInput>>;
  createMany?: InputMaybe<IdeaTopicCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaTopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaTopicWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaTopicUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<IdeaTopicUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<IdeaTopicUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type IdeaTopicUpdateWithWhereUniqueWithoutIdeaInput = {
  data: IdeaTopicUpdateWithoutIdeaInput;
  where: IdeaTopicWhereUniqueInput;
};

export type IdeaTopicUpdateWithWhereUniqueWithoutTopicInput = {
  data: IdeaTopicUpdateWithoutTopicInput;
  where: IdeaTopicWhereUniqueInput;
};

export type IdeaTopicUpdateWithoutIdeaInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneRequiredWithoutIdeaTopicsNestedInput>;
};

export type IdeaTopicUpdateWithoutTopicInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutIdeaTopicsNestedInput>;
};

export type IdeaTopicUpsertWithWhereUniqueWithoutIdeaInput = {
  create: IdeaTopicCreateWithoutIdeaInput;
  update: IdeaTopicUpdateWithoutIdeaInput;
  where: IdeaTopicWhereUniqueInput;
};

export type IdeaTopicUpsertWithWhereUniqueWithoutTopicInput = {
  create: IdeaTopicCreateWithoutTopicInput;
  update: IdeaTopicUpdateWithoutTopicInput;
  where: IdeaTopicWhereUniqueInput;
};

export type IdeaTopicWhereInput = {
  AND?: InputMaybe<Array<IdeaTopicWhereInput>>;
  NOT?: InputMaybe<Array<IdeaTopicWhereInput>>;
  OR?: InputMaybe<Array<IdeaTopicWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  idea?: InputMaybe<IdeaWhereInput>;
  ideaId?: InputMaybe<StringFilter>;
  topic?: InputMaybe<TopicWhereInput>;
  topicId?: InputMaybe<StringFilter>;
};

export type IdeaTopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IdeaUpdateInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateManyMutationInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaUpdateManyWithWhereWithoutCreatedByInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutOwnerInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutUpdatedByInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<IdeaCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<IdeaCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<IdeaUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<IdeaUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type IdeaUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<IdeaCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<IdeaCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<IdeaUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<IdeaUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type IdeaUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdeaCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<IdeaCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<IdeaCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdeaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  set?: InputMaybe<Array<IdeaWhereUniqueInput>>;
  update?: InputMaybe<Array<IdeaUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<IdeaUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<IdeaUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type IdeaUpdateOneRequiredWithoutIdeaTagsNestedInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdeaCreateOrConnectWithoutIdeaTagsInput>;
  create?: InputMaybe<IdeaCreateWithoutIdeaTagsInput>;
  update?: InputMaybe<IdeaUpdateWithoutIdeaTagsInput>;
  upsert?: InputMaybe<IdeaUpsertWithoutIdeaTagsInput>;
};

export type IdeaUpdateOneRequiredWithoutIdeaTopicsNestedInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdeaCreateOrConnectWithoutIdeaTopicsInput>;
  create?: InputMaybe<IdeaCreateWithoutIdeaTopicsInput>;
  update?: InputMaybe<IdeaUpdateWithoutIdeaTopicsInput>;
  upsert?: InputMaybe<IdeaUpsertWithoutIdeaTopicsInput>;
};

export type IdeaUpdateOneRequiredWithoutPostIdeasNestedInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdeaCreateOrConnectWithoutPostIdeasInput>;
  create?: InputMaybe<IdeaCreateWithoutPostIdeasInput>;
  update?: InputMaybe<IdeaUpdateWithoutPostIdeasInput>;
  upsert?: InputMaybe<IdeaUpsertWithoutPostIdeasInput>;
};

export type IdeaUpdateOneRequiredWithoutUserVotesNestedInput = {
  connect?: InputMaybe<IdeaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdeaCreateOrConnectWithoutUserVotesInput>;
  create?: InputMaybe<IdeaCreateWithoutUserVotesInput>;
  update?: InputMaybe<IdeaUpdateWithoutUserVotesInput>;
  upsert?: InputMaybe<IdeaUpsertWithoutUserVotesInput>;
};

export type IdeaUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: IdeaUpdateWithoutCreatedByInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutOwnerInput = {
  data: IdeaUpdateWithoutOwnerInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: IdeaUpdateWithoutUpdatedByInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithoutCreatedByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateWithoutIdeaTagsInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateWithoutIdeaTopicsInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateWithoutOwnerInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateWithoutPostIdeasInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateWithoutUpdatedByInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutIdeaNestedInput>;
};

export type IdeaUpdateWithoutUserVotesInput = {
  attachment?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutIdeaNestedInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutIdeaNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<UserUpdateOneWithoutIdeasNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutIdeaNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: IdeaCreateWithoutCreatedByInput;
  update: IdeaUpdateWithoutCreatedByInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutOwnerInput = {
  create: IdeaCreateWithoutOwnerInput;
  update: IdeaUpdateWithoutOwnerInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: IdeaCreateWithoutUpdatedByInput;
  update: IdeaUpdateWithoutUpdatedByInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithoutIdeaTagsInput = {
  create: IdeaCreateWithoutIdeaTagsInput;
  update: IdeaUpdateWithoutIdeaTagsInput;
};

export type IdeaUpsertWithoutIdeaTopicsInput = {
  create: IdeaCreateWithoutIdeaTopicsInput;
  update: IdeaUpdateWithoutIdeaTopicsInput;
};

export type IdeaUpsertWithoutPostIdeasInput = {
  create: IdeaCreateWithoutPostIdeasInput;
  update: IdeaUpdateWithoutPostIdeasInput;
};

export type IdeaUpsertWithoutUserVotesInput = {
  create: IdeaCreateWithoutUserVotesInput;
  update: IdeaUpdateWithoutUserVotesInput;
};

export type IdeaWhereInput = {
  AND?: InputMaybe<Array<IdeaWhereInput>>;
  NOT?: InputMaybe<Array<IdeaWhereInput>>;
  OR?: InputMaybe<Array<IdeaWhereInput>>;
  attachment?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  ideaTags?: InputMaybe<IdeaTagListRelationFilter>;
  ideaTopics?: InputMaybe<IdeaTopicListRelationFilter>;
  note?: InputMaybe<StringNullableFilter>;
  originalContent?: InputMaybe<JsonNullableFilter>;
  owner?: InputMaybe<UserWhereInput>;
  ownerId?: InputMaybe<StringNullableFilter>;
  postIdeas?: InputMaybe<PostIdeaListRelationFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userVotes?: InputMaybe<UserVoteListRelationFilter>;
};

export type IdeaWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Industry = {
  __typename?: 'Industry';
  _count: IndustryCount;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  feedbacks?: Maybe<Array<Feedback>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Array<Question>>;
  sortOrder: Scalars['Int']['output'];
  status: ActiveStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  userIndustries?: Maybe<Array<UserIndustry>>;
};

export type IndustryConnection = {
  __typename?: 'IndustryConnection';
  edges?: Maybe<Array<IndustryEdge>>;
  nodes?: Maybe<Array<Industry>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IndustryCount = {
  __typename?: 'IndustryCount';
  feedbacks: Scalars['Int']['output'];
  questions: Scalars['Int']['output'];
  userIndustries: Scalars['Int']['output'];
};

export type IndustryCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutIndustryInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutIndustryInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutIndustryInput>;
};

export type IndustryCreateManyCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type IndustryCreateManyCreatedByInputEnvelope = {
  data: Array<IndustryCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IndustryCreateManyUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type IndustryCreateManyUpdatedByInputEnvelope = {
  data: Array<IndustryCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IndustryCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<IndustryWhereUniqueInput>>;
};

export type IndustryCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<IndustryWhereUniqueInput>>;
};

export type IndustryCreateNestedOneWithoutFeedbacksInput = {
  connect?: InputMaybe<IndustryWhereUniqueInput>;
};

export type IndustryCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<IndustryWhereUniqueInput>;
};

export type IndustryCreateNestedOneWithoutUserIndustriesInput = {
  connect?: InputMaybe<IndustryWhereUniqueInput>;
};

export type IndustryCreateOrConnectWithoutCreatedByInput = {
  create: IndustryCreateWithoutCreatedByInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryCreateOrConnectWithoutFeedbacksInput = {
  create: IndustryCreateWithoutFeedbacksInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryCreateOrConnectWithoutQuestionsInput = {
  create: IndustryCreateWithoutQuestionsInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryCreateOrConnectWithoutUpdatedByInput = {
  create: IndustryCreateWithoutUpdatedByInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryCreateOrConnectWithoutUserIndustriesInput = {
  create: IndustryCreateWithoutUserIndustriesInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryCreateWithoutCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutIndustryInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutIndustryInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutIndustryInput>;
};

export type IndustryCreateWithoutFeedbacksInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutIndustryInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutIndustryInput>;
};

export type IndustryCreateWithoutQuestionsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutIndustryInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutIndustryInput>;
};

export type IndustryCreateWithoutUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutIndustryInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutIndustryInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutIndustryInput>;
};

export type IndustryCreateWithoutUserIndustriesInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutIndustryInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutIndustryInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type IndustryEdge = {
  __typename?: 'IndustryEdge';
  cursor: Scalars['String']['output'];
  node: Industry;
};

export type IndustryListRelationFilter = {
  every?: InputMaybe<IndustryWhereInput>;
  none?: InputMaybe<IndustryWhereInput>;
  some?: InputMaybe<IndustryWhereInput>;
};

export type IndustryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IndustryOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  userIndustries?: InputMaybe<UserIndustryOrderByRelationAggregateInput>;
};

export enum IndustryScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  SortOrder = 'sortOrder',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type IndustryScalarWhereInput = {
  AND?: InputMaybe<Array<IndustryScalarWhereInput>>;
  NOT?: InputMaybe<Array<IndustryScalarWhereInput>>;
  OR?: InputMaybe<Array<IndustryScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type IndustryUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type IndustryUpdateManyWithWhereWithoutCreatedByInput = {
  data: IndustryUpdateManyMutationInput;
  where: IndustryScalarWhereInput;
};

export type IndustryUpdateManyWithWhereWithoutUpdatedByInput = {
  data: IndustryUpdateManyMutationInput;
  where: IndustryScalarWhereInput;
};

export type IndustryUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IndustryCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<IndustryCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<IndustryCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IndustryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  set?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  update?: InputMaybe<Array<IndustryUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<IndustryUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<IndustryUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type IndustryUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IndustryCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<IndustryCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<IndustryCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IndustryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  set?: InputMaybe<Array<IndustryWhereUniqueInput>>;
  update?: InputMaybe<Array<IndustryUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<IndustryUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<IndustryUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type IndustryUpdateOneRequiredWithoutFeedbacksNestedInput = {
  connect?: InputMaybe<IndustryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IndustryCreateOrConnectWithoutFeedbacksInput>;
  create?: InputMaybe<IndustryCreateWithoutFeedbacksInput>;
  update?: InputMaybe<IndustryUpdateWithoutFeedbacksInput>;
  upsert?: InputMaybe<IndustryUpsertWithoutFeedbacksInput>;
};

export type IndustryUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<IndustryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IndustryCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<IndustryCreateWithoutQuestionsInput>;
  update?: InputMaybe<IndustryUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<IndustryUpsertWithoutQuestionsInput>;
};

export type IndustryUpdateOneRequiredWithoutUserIndustriesNestedInput = {
  connect?: InputMaybe<IndustryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IndustryCreateOrConnectWithoutUserIndustriesInput>;
  create?: InputMaybe<IndustryCreateWithoutUserIndustriesInput>;
  update?: InputMaybe<IndustryUpdateWithoutUserIndustriesInput>;
  upsert?: InputMaybe<IndustryUpsertWithoutUserIndustriesInput>;
};

export type IndustryUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: IndustryUpdateWithoutCreatedByInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: IndustryUpdateWithoutUpdatedByInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryUpdateWithoutCreatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutIndustryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutIndustryNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutIndustryNestedInput>;
};

export type IndustryUpdateWithoutFeedbacksInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutIndustryNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutIndustryNestedInput>;
};

export type IndustryUpdateWithoutQuestionsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutIndustryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutIndustryNestedInput>;
};

export type IndustryUpdateWithoutUpdatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutIndustryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutIndustryNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutIndustryNestedInput>;
};

export type IndustryUpdateWithoutUserIndustriesInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutIndustryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutIndustryNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type IndustryUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: IndustryCreateWithoutCreatedByInput;
  update: IndustryUpdateWithoutCreatedByInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: IndustryCreateWithoutUpdatedByInput;
  update: IndustryUpdateWithoutUpdatedByInput;
  where: IndustryWhereUniqueInput;
};

export type IndustryUpsertWithoutFeedbacksInput = {
  create: IndustryCreateWithoutFeedbacksInput;
  update: IndustryUpdateWithoutFeedbacksInput;
};

export type IndustryUpsertWithoutQuestionsInput = {
  create: IndustryCreateWithoutQuestionsInput;
  update: IndustryUpdateWithoutQuestionsInput;
};

export type IndustryUpsertWithoutUserIndustriesInput = {
  create: IndustryCreateWithoutUserIndustriesInput;
  update: IndustryUpdateWithoutUserIndustriesInput;
};

export type IndustryWhereInput = {
  AND?: InputMaybe<Array<IndustryWhereInput>>;
  NOT?: InputMaybe<Array<IndustryWhereInput>>;
  OR?: InputMaybe<Array<IndustryWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  feedbacks?: InputMaybe<FeedbackListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userIndustries?: InputMaybe<UserIndustryListRelationFilter>;
};

export type IndustryWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Log = {
  __typename?: 'Log';
  action?: Maybe<LogAction>;
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  threadName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<Scalars['JSON']['output']>;
};

export enum LogAction {
  Create = 'Create',
  Delete = 'Delete',
  LogIn = 'LogIn',
  LogOut = 'LogOut',
  Update = 'Update'
}

export type LogConnection = {
  __typename?: 'LogConnection';
  edges?: Maybe<Array<LogEdge>>;
  nodes?: Maybe<Array<Log>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LogCreateInput = {
  action?: InputMaybe<LogAction>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  threadName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['JSON']['input']>;
};

export type LogEdge = {
  __typename?: 'LogEdge';
  cursor: Scalars['String']['output'];
  node: Log;
};

export type LogOrderByWithRelationInput = {
  action?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  threadName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<SortOrder>;
};

export enum LogScalarFieldEnum {
  Action = 'action',
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  ThreadName = 'threadName',
  UpdatedAt = 'updatedAt',
  User = 'user'
}

export type LogWhereInput = {
  AND?: InputMaybe<Array<LogWhereInput>>;
  NOT?: InputMaybe<Array<LogWhereInput>>;
  OR?: InputMaybe<Array<LogWhereInput>>;
  action?: InputMaybe<EnumLogActionNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  threadName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<JsonNullableFilter>;
};

export type LogWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type ManyTopicTypeCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutTopicInput>;
  name: Scalars['String']['input'];
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutTopicInput>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  types?: InputMaybe<Array<TopicType>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminDeleteComment: Scalars['Int']['output'];
  deleteAward: Scalars['Int']['output'];
  deleteAwards: Scalars['Int']['output'];
  deleteBannerGroups: Scalars['Int']['output'];
  deleteBanners: Scalars['Int']['output'];
  deleteDepartments: Scalars['Int']['output'];
  deleteEvents: Scalars['Int']['output'];
  deleteFeedbacks: Scalars['Int']['output'];
  deleteIdeas: Scalars['Int']['output'];
  deleteIndustries: Scalars['Int']['output'];
  deleteMyNotifications: Scalars['Int']['output'];
  deleteNotification: Scalars['Int']['output'];
  deletePostIdeas: Scalars['Int']['output'];
  deletePostTags: Scalars['Int']['output'];
  deletePostTopics: Scalars['Int']['output'];
  deletePosts: Scalars['Int']['output'];
  deletePushNotificationData: Scalars['Int']['output'];
  deleteQuestions: Scalars['Int']['output'];
  deleteTags: Scalars['Int']['output'];
  deleteTopics: Scalars['Int']['output'];
  deleteUserApprovers: Scalars['Int']['output'];
  deleteUserAwards: Scalars['Int']['output'];
  deleteUserIndustries: Scalars['Int']['output'];
  deleteUserSearchHistories: Scalars['Int']['output'];
  deleteUserVotes: Scalars['Int']['output'];
  increasePostView: Scalars['Int']['output'];
  likePost: Post;
  login: Auth;
  loginAzure: User;
  loginPortalAdmin: User;
  loginTSM: User;
  refreshToken: Token;
  saveAward: Award;
  saveBanner: Banner;
  saveBannerGroup: BannerGroup;
  saveBannerGroupWithImages: BannerGroup;
  saveComment: Comment;
  saveDepartment: Department;
  saveEvent: Event;
  saveEvents: Scalars['Int']['output'];
  saveFeedback: Feedback;
  saveFeedbacks: Scalars['Int']['output'];
  saveIdea: Idea;
  saveIndustry: Industry;
  saveLog: Log;
  savePost: Post;
  savePostIdea: PostIdea;
  savePostIdeas: Scalars['Int']['output'];
  savePostTag: PostTag;
  savePostTags: Scalars['Int']['output'];
  savePostTopic: PostTopic;
  savePostTopics: Scalars['Int']['output'];
  saveQuestion: Question;
  saveTag: Tag;
  saveTags: Scalars['Int']['output'];
  saveTopic: Topic;
  saveTopics: Scalars['Int']['output'];
  saveTopicsFromTypes: Scalars['Int']['output'];
  saveUserApprover: UserApprover;
  saveUserApprovers: Scalars['Int']['output'];
  saveUserAward: UserAward;
  saveUserIndustries: Scalars['Int']['output'];
  saveUserIndustry: UserIndustry;
  saveUserSearchHistories: Scalars['Int']['output'];
  saveUserSearchHistory: UserSearchHistory;
  saveUserVote: UserVote;
  saveUserVotes: Scalars['Int']['output'];
  testSub: Notification;
  updateAvatar: User;
  updateAward: Award;
  updateBackground: User;
  updateBanner: Banner;
  updateBannerGroup: BannerGroup;
  updateBannerGroupWithImages: BannerGroup;
  updateComment: Comment;
  updateDepartment: Department;
  updateEvent: Event;
  updateEvents: Scalars['Int']['output'];
  updateFeedback: Feedback;
  updateFeedbacks: Scalars['Int']['output'];
  updateIdea: Idea;
  updateIndustry: Industry;
  updateMyNotifications: Scalars['Int']['output'];
  updateNotification: Notification;
  updatePost: Post;
  updatePostIdea: PostIdea;
  updatePostIdeas: Scalars['Int']['output'];
  updatePostTag: PostTag;
  updatePostTags: Scalars['Int']['output'];
  updatePostTopic: PostTopic;
  updatePostTopics: Scalars['Int']['output'];
  updatePushNotificationData: PushNotificationData;
  updateQuestion: Question;
  updateStatus: User;
  updateTag: Tag;
  updateTags: Scalars['Int']['output'];
  updateTopic: Topic;
  updateTopics: Scalars['Int']['output'];
  updateUserApprover: UserApprover;
  updateUserApprovers: Scalars['Int']['output'];
  updateUserAward: UserAward;
  updateUserIndustries: Scalars['Int']['output'];
  updateUserIndustry: UserIndustry;
  updateUserSearchHistories: Scalars['Int']['output'];
  updateUserSearchHistory: UserSearchHistory;
  updateUserVote: UserVote;
  updateUserVotes: Scalars['Int']['output'];
  userDeleteComment: Scalars['Int']['output'];
  voteIdea: Scalars['Int']['output'];
};


export type MutationAdminDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteAwardArgs = {
  where: AwardWhereUniqueInput;
};


export type MutationDeleteAwardsArgs = {
  where?: InputMaybe<AwardWhereInput>;
};


export type MutationDeleteBannerGroupsArgs = {
  where?: InputMaybe<BannerGroupWhereInput>;
};


export type MutationDeleteBannersArgs = {
  where?: InputMaybe<BannerWhereInput>;
};


export type MutationDeleteDepartmentsArgs = {
  where?: InputMaybe<DepartmentWhereInput>;
};


export type MutationDeleteEventsArgs = {
  where?: InputMaybe<EventWhereInput>;
};


export type MutationDeleteFeedbacksArgs = {
  where?: InputMaybe<FeedbackWhereInput>;
};


export type MutationDeleteIdeasArgs = {
  where?: InputMaybe<IdeaWhereInput>;
};


export type MutationDeleteIndustriesArgs = {
  where?: InputMaybe<IndustryWhereInput>;
};


export type MutationDeleteMyNotificationsArgs = {
  where?: InputMaybe<NotificationWhereInput>;
};


export type MutationDeleteNotificationArgs = {
  where?: InputMaybe<NotificationWhereInput>;
};


export type MutationDeletePostIdeasArgs = {
  where?: InputMaybe<PostIdeaWhereInput>;
};


export type MutationDeletePostTagsArgs = {
  where?: InputMaybe<PostTagWhereInput>;
};


export type MutationDeletePostTopicsArgs = {
  where?: InputMaybe<PostTopicWhereInput>;
};


export type MutationDeletePostsArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeletePushNotificationDataArgs = {
  where?: InputMaybe<PushNotificationDataWhereInput>;
};


export type MutationDeleteQuestionsArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationDeleteTagsArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteTopicsArgs = {
  where?: InputMaybe<TopicWhereInput>;
};


export type MutationDeleteUserApproversArgs = {
  where?: InputMaybe<UserApproverWhereInput>;
};


export type MutationDeleteUserAwardsArgs = {
  where?: InputMaybe<UserAwardWhereInput>;
};


export type MutationDeleteUserIndustriesArgs = {
  where?: InputMaybe<UserIndustryWhereInput>;
};


export type MutationDeleteUserSearchHistoriesArgs = {
  where?: InputMaybe<UserSearchHistoryWhereInput>;
};


export type MutationDeleteUserVotesArgs = {
  where?: InputMaybe<UserVoteWhereInput>;
};


export type MutationIncreasePostViewArgs = {
  where: PostWhereUniqueInput;
};


export type MutationLikePostArgs = {
  postId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationLoginAzureArgs = {
  token: Scalars['String']['input'];
};


export type MutationLoginPortalAdminArgs = {
  token: Scalars['String']['input'];
};


export type MutationLoginTsmArgs = {
  token: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT']['input'];
};


export type MutationSaveAwardArgs = {
  data: AwardCreateInput;
};


export type MutationSaveBannerArgs = {
  data: BannerCreateInput;
};


export type MutationSaveBannerGroupArgs = {
  data: BannerGroupCreateInput;
};


export type MutationSaveBannerGroupWithImagesArgs = {
  data: BannerGroupCreateInput;
  imagesData?: InputMaybe<Array<BannerCreateManyInput>>;
};


export type MutationSaveCommentArgs = {
  data: CustomCommentCreateInput;
};


export type MutationSaveDepartmentArgs = {
  data: DepartmentCreateInput;
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSaveEventArgs = {
  data: EventCreateInput;
};


export type MutationSaveEventsArgs = {
  data: Array<EventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveFeedbackArgs = {
  data: FeedbackCreateInput;
};


export type MutationSaveFeedbacksArgs = {
  data: Array<FeedbackCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveIdeaArgs = {
  data: IdeaCreateInput;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSaveIndustryArgs = {
  data: IndustryCreateInput;
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSaveLogArgs = {
  data: LogCreateInput;
};


export type MutationSavePostArgs = {
  data: PostCreateInput;
  ideaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  pushNotification?: InputMaybe<PushNotificationInput>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSavePostIdeaArgs = {
  data: PostIdeaCreateInput;
};


export type MutationSavePostIdeasArgs = {
  data: Array<PostIdeaCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSavePostTagArgs = {
  data: PostTagCreateInput;
};


export type MutationSavePostTagsArgs = {
  data: Array<PostTagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSavePostTopicArgs = {
  data: PostTopicCreateInput;
};


export type MutationSavePostTopicsArgs = {
  data: Array<PostTopicCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveQuestionArgs = {
  data: QuestionCreateInput;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSaveTagArgs = {
  data: TagCreateInput;
};


export type MutationSaveTagsArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveTopicArgs = {
  data: TopicCreateInput;
};


export type MutationSaveTopicsArgs = {
  data: Array<TopicCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveTopicsFromTypesArgs = {
  data: ManyTopicTypeCreateInput;
};


export type MutationSaveUserApproverArgs = {
  data: UserApproverCreateInput;
};


export type MutationSaveUserApproversArgs = {
  data: Array<UserApproverCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveUserAwardArgs = {
  data: UserAwardCreateInput;
};


export type MutationSaveUserIndustriesArgs = {
  data: Array<UserIndustryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveUserIndustryArgs = {
  data: UserIndustryCreateInput;
};


export type MutationSaveUserSearchHistoriesArgs = {
  data: Array<UserSearchHistoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSaveUserSearchHistoryArgs = {
  data: UserSearchHistoryCreateInput;
};


export type MutationSaveUserVoteArgs = {
  data: UserVoteCreateInput;
};


export type MutationSaveUserVotesArgs = {
  data: Array<UserVoteCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateAvatarArgs = {
  avatarUrl: Scalars['String']['input'];
};


export type MutationUpdateAwardArgs = {
  data: AwardUpdateInput;
  where: AwardWhereUniqueInput;
};


export type MutationUpdateBackgroundArgs = {
  backgroundUrl: Scalars['String']['input'];
};


export type MutationUpdateBannerArgs = {
  data: BannerUpdateInput;
  where: BannerWhereUniqueInput;
};


export type MutationUpdateBannerGroupArgs = {
  data: BannerGroupUpdateInput;
  where: BannerGroupWhereUniqueInput;
};


export type MutationUpdateBannerGroupWithImagesArgs = {
  data: BannerGroupUpdateInput;
  imagesData?: InputMaybe<Array<CustomBannerUpdateInput>>;
  where: BannerGroupWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CustomCommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentCreateInput;
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  where: DepartmentWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventsArgs = {
  data: EventUpdateManyMutationInput;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationUpdateFeedbackArgs = {
  data: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};


export type MutationUpdateFeedbacksArgs = {
  data: FeedbackUpdateManyMutationInput;
  where?: InputMaybe<FeedbackWhereInput>;
};


export type MutationUpdateIdeaArgs = {
  data: IdeaUpdateInput;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
  where: IdeaWhereUniqueInput;
};


export type MutationUpdateIndustryArgs = {
  data: IndustryCreateInput;
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  where: IndustryWhereUniqueInput;
};


export type MutationUpdateMyNotificationsArgs = {
  data: NotificationUpdateManyMutationInput;
  where?: InputMaybe<NotificationWhereInput>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostCreateInput;
  ideaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  pushNotification?: InputMaybe<PushNotificationInput>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostIdeaArgs = {
  data: PostIdeaUpdateInput;
  where: PostIdeaWhereUniqueInput;
};


export type MutationUpdatePostIdeasArgs = {
  data: PostIdeaUpdateManyMutationInput;
  where?: InputMaybe<PostIdeaWhereInput>;
};


export type MutationUpdatePostTagArgs = {
  data: PostTagUpdateInput;
  where: PostTagWhereUniqueInput;
};


export type MutationUpdatePostTagsArgs = {
  data: PostTagUpdateManyMutationInput;
  where?: InputMaybe<PostTagWhereInput>;
};


export type MutationUpdatePostTopicArgs = {
  data: PostTopicUpdateInput;
  where: PostTopicWhereUniqueInput;
};


export type MutationUpdatePostTopicsArgs = {
  data: PostTopicUpdateManyMutationInput;
  where?: InputMaybe<PostTopicWhereInput>;
};


export type MutationUpdatePushNotificationDataArgs = {
  data: PushNotificationDataUpdateInput;
  where: PushNotificationDataWhereUniqueInput;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateStatusArgs = {
  feelingIcon: Scalars['String']['input'];
  feelingStatus: Scalars['String']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateTopicArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpdateTopicsArgs = {
  data: TopicUpdateManyMutationInput;
  where?: InputMaybe<TopicWhereInput>;
};


export type MutationUpdateUserApproverArgs = {
  data: UserApproverUpdateInput;
  where: UserApproverWhereUniqueInput;
};


export type MutationUpdateUserApproversArgs = {
  data: UserApproverUpdateManyMutationInput;
  where?: InputMaybe<UserApproverWhereInput>;
};


export type MutationUpdateUserAwardArgs = {
  data: UserAwardUpdateInput;
  where: UserAwardWhereUniqueInput;
};


export type MutationUpdateUserIndustriesArgs = {
  data: UserIndustryUpdateManyMutationInput;
  where?: InputMaybe<UserIndustryWhereInput>;
};


export type MutationUpdateUserIndustryArgs = {
  data: UserIndustryUpdateInput;
  where: UserIndustryWhereUniqueInput;
};


export type MutationUpdateUserSearchHistoriesArgs = {
  data: UserSearchHistoryUpdateManyMutationInput;
  where?: InputMaybe<UserSearchHistoryWhereInput>;
};


export type MutationUpdateUserSearchHistoryArgs = {
  data: UserSearchHistoryUpdateInput;
  where: UserSearchHistoryWhereUniqueInput;
};


export type MutationUpdateUserVoteArgs = {
  data: UserVoteUpdateInput;
  where: UserVoteWhereUniqueInput;
};


export type MutationUpdateUserVotesArgs = {
  data: UserVoteUpdateManyMutationInput;
  where?: InputMaybe<UserVoteWhereInput>;
};


export type MutationUserDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationVoteIdeaArgs = {
  ideaId?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumActiveStatusFilter = {
  equals?: InputMaybe<ActiveStatus>;
  in?: InputMaybe<Array<ActiveStatus>>;
  not?: InputMaybe<NestedEnumActiveStatusFilter>;
  notIn?: InputMaybe<Array<ActiveStatus>>;
};

export type NestedEnumCommentStatusFilter = {
  equals?: InputMaybe<CommentStatus>;
  in?: InputMaybe<Array<CommentStatus>>;
  not?: InputMaybe<NestedEnumCommentStatusFilter>;
  notIn?: InputMaybe<Array<CommentStatus>>;
};

export type NestedEnumFeedbackStatusFilter = {
  equals?: InputMaybe<FeedbackStatus>;
  in?: InputMaybe<Array<FeedbackStatus>>;
  not?: InputMaybe<NestedEnumFeedbackStatusFilter>;
  notIn?: InputMaybe<Array<FeedbackStatus>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumLogActionNullableFilter = {
  equals?: InputMaybe<LogAction>;
  in?: InputMaybe<Array<LogAction>>;
  not?: InputMaybe<NestedEnumLogActionNullableFilter>;
  notIn?: InputMaybe<Array<LogAction>>;
};

export type NestedEnumPostStatusFilter = {
  equals?: InputMaybe<PostStatus>;
  in?: InputMaybe<Array<PostStatus>>;
  not?: InputMaybe<NestedEnumPostStatusFilter>;
  notIn?: InputMaybe<Array<PostStatus>>;
};

export type NestedEnumPostTypeFilter = {
  equals?: InputMaybe<PostType>;
  in?: InputMaybe<Array<PostType>>;
  not?: InputMaybe<NestedEnumPostTypeFilter>;
  notIn?: InputMaybe<Array<PostType>>;
};

export type NestedEnumPublishStatusFilter = {
  equals?: InputMaybe<PublishStatus>;
  in?: InputMaybe<Array<PublishStatus>>;
  not?: InputMaybe<NestedEnumPublishStatusFilter>;
  notIn?: InputMaybe<Array<PublishStatus>>;
};

export type NestedEnumPushTypeFilter = {
  equals?: InputMaybe<PushType>;
  in?: InputMaybe<Array<PushType>>;
  not?: InputMaybe<NestedEnumPushTypeFilter>;
  notIn?: InputMaybe<Array<PushType>>;
};

export type NestedEnumQuestionStatusFilter = {
  equals?: InputMaybe<QuestionStatus>;
  in?: InputMaybe<Array<QuestionStatus>>;
  not?: InputMaybe<NestedEnumQuestionStatusFilter>;
  notIn?: InputMaybe<Array<QuestionStatus>>;
};

export type NestedEnumTargetTypeFilter = {
  equals?: InputMaybe<TargetType>;
  in?: InputMaybe<Array<TargetType>>;
  not?: InputMaybe<NestedEnumTargetTypeFilter>;
  notIn?: InputMaybe<Array<TargetType>>;
};

export type NestedEnumTargetTypeNullableFilter = {
  equals?: InputMaybe<TargetType>;
  in?: InputMaybe<Array<TargetType>>;
  not?: InputMaybe<NestedEnumTargetTypeNullableFilter>;
  notIn?: InputMaybe<Array<TargetType>>;
};

export type NestedEnumTopicTypeFilter = {
  equals?: InputMaybe<TopicType>;
  in?: InputMaybe<Array<TopicType>>;
  not?: InputMaybe<NestedEnumTopicTypeFilter>;
  notIn?: InputMaybe<Array<TopicType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  content?: Maybe<Scalars['String']['output']>;
  contentUnAccent?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  readAt?: Maybe<Scalars['DateTime']['output']>;
  targetId?: Maybe<Scalars['String']['output']>;
  targetType?: Maybe<TargetType>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges?: Maybe<Array<NotificationEdge>>;
  nodes?: Maybe<Array<Notification>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NotificationCreateManyCreatedByInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<TargetType>;
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type NotificationCreateManyCreatedByInputEnvelope = {
  data: Array<NotificationCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationCreateManyUpdatedByInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<TargetType>;
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type NotificationCreateManyUpdatedByInputEnvelope = {
  data: Array<NotificationCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationCreateManyUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<TargetType>;
  title: Scalars['String']['input'];
};

export type NotificationCreateManyUserInputEnvelope = {
  data: Array<NotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationCreateOrConnectWithoutCreatedByInput = {
  create: NotificationCreateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUpdatedByInput = {
  create: NotificationCreateWithoutUpdatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutCreatedByInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<TargetType>;
  title: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutNotificationssInput;
};

export type NotificationCreateWithoutUpdatedByInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<TargetType>;
  title: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutNotificationssInput;
};

export type NotificationCreateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<TargetType>;
  title: Scalars['String']['input'];
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  contentUnAccent?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  readAt?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
  targetType?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Content = 'content',
  ContentUnAccent = 'contentUnAccent',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ReadAt = 'readAt',
  TargetId = 'targetId',
  TargetType = 'targetType',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById',
  UserId = 'userId'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  targetId?: InputMaybe<StringNullableFilter>;
  targetType?: InputMaybe<EnumTargetTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetType?: InputMaybe<NullableEnumTargetTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationssNestedInput>;
};

export type NotificationUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetType?: InputMaybe<NullableEnumTargetTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutCreatedByInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutUpdatedByInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<NotificationCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type NotificationUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<NotificationCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type NotificationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: NotificationUpdateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: NotificationUpdateWithoutUpdatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutCreatedByInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetType?: InputMaybe<NullableEnumTargetTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationssNestedInput>;
};

export type NotificationUpdateWithoutUpdatedByInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetType?: InputMaybe<NullableEnumTargetTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationssNestedInput>;
};

export type NotificationUpdateWithoutUserInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetType?: InputMaybe<NullableEnumTargetTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: NotificationCreateWithoutCreatedByInput;
  update: NotificationUpdateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: NotificationCreateWithoutUpdatedByInput;
  update: NotificationUpdateWithoutUpdatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  targetId?: InputMaybe<StringNullableFilter>;
  targetType?: InputMaybe<EnumTargetTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableEnumTargetTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TargetType>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  _count: PostCount;
  approveBy?: Maybe<User>;
  approveById?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  contentUnAccent?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  head: Scalars['String']['output'];
  headUnAccent?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isHot?: Maybe<Scalars['Boolean']['output']>;
  isNotice?: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  postComments?: Maybe<Array<Comment>>;
  postIdeas?: Maybe<Array<PostIdea>>;
  postTags?: Maybe<Array<PostTag>>;
  postTopics?: Maybe<Array<PostTopic>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  pushNotificationDatas?: Maybe<Array<PushNotificationData>>;
  slug?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  status: PostStatus;
  subTitle?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  titleUnAccent?: Maybe<Scalars['String']['output']>;
  type: PostType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  userLikeds?: Maybe<Array<UserLiked>>;
  userVieweds?: Maybe<Array<UserViewed>>;
  userVotes?: Maybe<Array<UserVote>>;
  viewCount: Scalars['Int']['output'];
  voteCount: Scalars['Int']['output'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostEdge>>;
  nodes?: Maybe<Array<Post>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostCount = {
  __typename?: 'PostCount';
  postComments: Scalars['Int']['output'];
  postIdeas: Scalars['Int']['output'];
  postTags: Scalars['Int']['output'];
  postTopics: Scalars['Int']['output'];
  pushNotificationDatas: Scalars['Int']['output'];
  userLikeds: Scalars['Int']['output'];
  userVieweds: Scalars['Int']['output'];
  userVotes: Scalars['Int']['output'];
};

export type PostCreateInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateManyApproveByInput = {
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateManyApproveByInputEnvelope = {
  data: Array<PostCreateManyApproveByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyCreatedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateManyCreatedByInputEnvelope = {
  data: Array<PostCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyUpdatedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateManyUpdatedByInputEnvelope = {
  data: Array<PostCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateNestedManyWithoutApproveByInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateNestedOneWithoutPostCommentsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutPostIdeasInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutPostTagsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutPostTopicsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutUserLikedsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutUserViewedsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateNestedOneWithoutUserVotesInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
};

export type PostCreateOrConnectWithoutApproveByInput = {
  create: PostCreateWithoutApproveByInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCreatedByInput = {
  create: PostCreateWithoutCreatedByInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPostCommentsInput = {
  create: PostCreateWithoutPostCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPostIdeasInput = {
  create: PostCreateWithoutPostIdeasInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPostTagsInput = {
  create: PostCreateWithoutPostTagsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPostTopicsInput = {
  create: PostCreateWithoutPostTopicsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutPushNotificationDatasInput = {
  create: PostCreateWithoutPushNotificationDatasInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUpdatedByInput = {
  create: PostCreateWithoutUpdatedByInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUserLikedsInput = {
  create: PostCreateWithoutUserLikedsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUserViewedsInput = {
  create: PostCreateWithoutUserViewedsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUserVotesInput = {
  create: PostCreateWithoutUserVotesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutApproveByInput = {
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutCreatedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutPostCommentsInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutPostIdeasInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutPostTagsInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutPostTopicsInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutPushNotificationDatasInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutUpdatedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutUserLikedsInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutUserViewedsInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreateWithoutUserVotesInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  commentCount?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  head: Scalars['String']['input'];
  headUnAccent?: InputMaybe<Scalars['String']['input']>;
  isHot?: InputMaybe<Scalars['Boolean']['input']>;
  isNotice?: InputMaybe<Scalars['Boolean']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  postComments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  postIdeas?: InputMaybe<PostIdeaCreateNestedManyWithoutPostInput>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutPostInput>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutPostInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataCreateNestedManyWithoutPostInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<PostStatus>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutPostInput>;
  userVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutPostInput>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostIdea = {
  __typename?: 'PostIdea';
  id: Scalars['ID']['output'];
  idea: Idea;
  ideaId: Scalars['String']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  totalVoteCount: Scalars['Int']['output'];
  voteCount: Scalars['Int']['output'];
};

export type PostIdeaConnection = {
  __typename?: 'PostIdeaConnection';
  edges?: Maybe<Array<PostIdeaEdge>>;
  nodes?: Maybe<Array<PostIdea>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostIdeaCreateInput = {
  idea: IdeaCreateNestedOneWithoutPostIdeasInput;
  post: PostCreateNestedOneWithoutPostIdeasInput;
  priority?: InputMaybe<Scalars['Int']['input']>;
  totalVoteCount: Scalars['Int']['input'];
  voteCount: Scalars['Int']['input'];
};

export type PostIdeaCreateManyIdeaInput = {
  postId: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  totalVoteCount: Scalars['Int']['input'];
  voteCount: Scalars['Int']['input'];
};

export type PostIdeaCreateManyIdeaInputEnvelope = {
  data: Array<PostIdeaCreateManyIdeaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostIdeaCreateManyInput = {
  ideaId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  totalVoteCount: Scalars['Int']['input'];
  voteCount: Scalars['Int']['input'];
};

export type PostIdeaCreateManyPostInput = {
  ideaId: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  totalVoteCount: Scalars['Int']['input'];
  voteCount: Scalars['Int']['input'];
};

export type PostIdeaCreateManyPostInputEnvelope = {
  data: Array<PostIdeaCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostIdeaCreateNestedManyWithoutIdeaInput = {
  connect?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
};

export type PostIdeaCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
};

export type PostIdeaCreateOrConnectWithoutIdeaInput = {
  create: PostIdeaCreateWithoutIdeaInput;
  where: PostIdeaWhereUniqueInput;
};

export type PostIdeaCreateOrConnectWithoutPostInput = {
  create: PostIdeaCreateWithoutPostInput;
  where: PostIdeaWhereUniqueInput;
};

export type PostIdeaCreateWithoutIdeaInput = {
  post: PostCreateNestedOneWithoutPostIdeasInput;
  priority?: InputMaybe<Scalars['Int']['input']>;
  totalVoteCount: Scalars['Int']['input'];
  voteCount: Scalars['Int']['input'];
};

export type PostIdeaCreateWithoutPostInput = {
  idea: IdeaCreateNestedOneWithoutPostIdeasInput;
  priority?: InputMaybe<Scalars['Int']['input']>;
  totalVoteCount: Scalars['Int']['input'];
  voteCount: Scalars['Int']['input'];
};

export type PostIdeaEdge = {
  __typename?: 'PostIdeaEdge';
  cursor: Scalars['String']['output'];
  node: PostIdea;
};

export type PostIdeaListRelationFilter = {
  every?: InputMaybe<PostIdeaWhereInput>;
  none?: InputMaybe<PostIdeaWhereInput>;
  some?: InputMaybe<PostIdeaWhereInput>;
};

export type PostIdeaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostIdeaOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  idea?: InputMaybe<IdeaOrderByWithRelationInput>;
  ideaId?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  totalVoteCount?: InputMaybe<SortOrder>;
  voteCount?: InputMaybe<SortOrder>;
};

export enum PostIdeaScalarFieldEnum {
  Id = 'id',
  IdeaId = 'ideaId',
  PostId = 'postId',
  Priority = 'priority',
  TotalVoteCount = 'totalVoteCount',
  VoteCount = 'voteCount'
}

export type PostIdeaScalarWhereInput = {
  AND?: InputMaybe<Array<PostIdeaScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostIdeaScalarWhereInput>>;
  OR?: InputMaybe<Array<PostIdeaScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  ideaId?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  totalVoteCount?: InputMaybe<IntFilter>;
  voteCount?: InputMaybe<IntFilter>;
};

export type PostIdeaUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutPostIdeasNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostIdeasNestedInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostIdeaUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostIdeaUpdateManyWithWhereWithoutIdeaInput = {
  data: PostIdeaUpdateManyMutationInput;
  where: PostIdeaScalarWhereInput;
};

export type PostIdeaUpdateManyWithWhereWithoutPostInput = {
  data: PostIdeaUpdateManyMutationInput;
  where: PostIdeaScalarWhereInput;
};

export type PostIdeaUpdateManyWithoutIdeaNestedInput = {
  connect?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostIdeaCreateOrConnectWithoutIdeaInput>>;
  create?: InputMaybe<Array<PostIdeaCreateWithoutIdeaInput>>;
  createMany?: InputMaybe<PostIdeaCreateManyIdeaInputEnvelope>;
  delete?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostIdeaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  set?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  update?: InputMaybe<Array<PostIdeaUpdateWithWhereUniqueWithoutIdeaInput>>;
  updateMany?: InputMaybe<Array<PostIdeaUpdateManyWithWhereWithoutIdeaInput>>;
  upsert?: InputMaybe<Array<PostIdeaUpsertWithWhereUniqueWithoutIdeaInput>>;
};

export type PostIdeaUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostIdeaCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostIdeaCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostIdeaCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostIdeaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  set?: InputMaybe<Array<PostIdeaWhereUniqueInput>>;
  update?: InputMaybe<Array<PostIdeaUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PostIdeaUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PostIdeaUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostIdeaUpdateWithWhereUniqueWithoutIdeaInput = {
  data: PostIdeaUpdateWithoutIdeaInput;
  where: PostIdeaWhereUniqueInput;
};

export type PostIdeaUpdateWithWhereUniqueWithoutPostInput = {
  data: PostIdeaUpdateWithoutPostInput;
  where: PostIdeaWhereUniqueInput;
};

export type PostIdeaUpdateWithoutIdeaInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostIdeasNestedInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostIdeaUpdateWithoutPostInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutPostIdeasNestedInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostIdeaUpsertWithWhereUniqueWithoutIdeaInput = {
  create: PostIdeaCreateWithoutIdeaInput;
  update: PostIdeaUpdateWithoutIdeaInput;
  where: PostIdeaWhereUniqueInput;
};

export type PostIdeaUpsertWithWhereUniqueWithoutPostInput = {
  create: PostIdeaCreateWithoutPostInput;
  update: PostIdeaUpdateWithoutPostInput;
  where: PostIdeaWhereUniqueInput;
};

export type PostIdeaWhereInput = {
  AND?: InputMaybe<Array<PostIdeaWhereInput>>;
  NOT?: InputMaybe<Array<PostIdeaWhereInput>>;
  OR?: InputMaybe<Array<PostIdeaWhereInput>>;
  id?: InputMaybe<StringFilter>;
  idea?: InputMaybe<IdeaWhereInput>;
  ideaId?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  totalVoteCount?: InputMaybe<IntFilter>;
  voteCount?: InputMaybe<IntFilter>;
};

export type PostIdeaWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  approveBy?: InputMaybe<UserOrderByWithRelationInput>;
  approveById?: InputMaybe<SortOrder>;
  commentCount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  contentUnAccent?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  endAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  head?: InputMaybe<SortOrder>;
  headUnAccent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHot?: InputMaybe<SortOrder>;
  isNotice?: InputMaybe<SortOrder>;
  likeCount?: InputMaybe<SortOrder>;
  postComments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  postIdeas?: InputMaybe<PostIdeaOrderByRelationAggregateInput>;
  postTags?: InputMaybe<PostTagOrderByRelationAggregateInput>;
  postTopics?: InputMaybe<PostTopicOrderByRelationAggregateInput>;
  publishedAt?: InputMaybe<SortOrder>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subTitle?: InputMaybe<SortOrder>;
  thumbnailUrl?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleUnAccent?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  userLikeds?: InputMaybe<UserLikedOrderByRelationAggregateInput>;
  userVieweds?: InputMaybe<UserViewedOrderByRelationAggregateInput>;
  userVotes?: InputMaybe<UserVoteOrderByRelationAggregateInput>;
  viewCount?: InputMaybe<SortOrder>;
  voteCount?: InputMaybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  ApproveById = 'approveById',
  CommentCount = 'commentCount',
  Content = 'content',
  ContentUnAccent = 'contentUnAccent',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  EndAt = 'endAt',
  ExpiredAt = 'expiredAt',
  Head = 'head',
  HeadUnAccent = 'headUnAccent',
  Id = 'id',
  IsHot = 'isHot',
  IsNotice = 'isNotice',
  LikeCount = 'likeCount',
  PublishedAt = 'publishedAt',
  Slug = 'slug',
  StartAt = 'startAt',
  Status = 'status',
  SubTitle = 'subTitle',
  ThumbnailUrl = 'thumbnailUrl',
  Title = 'title',
  TitleUnAccent = 'titleUnAccent',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById',
  ViewCount = 'viewCount',
  VoteCount = 'voteCount'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  approveById?: InputMaybe<StringNullableFilter>;
  commentCount?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  endAt?: InputMaybe<DateTimeNullableFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  head?: InputMaybe<StringFilter>;
  headUnAccent?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isHot?: InputMaybe<BoolNullableFilter>;
  isNotice?: InputMaybe<BoolNullableFilter>;
  likeCount?: InputMaybe<IntFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  startAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumPostStatusFilter>;
  subTitle?: InputMaybe<StringNullableFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumPostTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  viewCount?: InputMaybe<IntFilter>;
  voteCount?: InputMaybe<IntFilter>;
};

export enum PostStatus {
  Draft = 'Draft',
  Published = 'Published',
  Suspended = 'Suspended',
  WaitingForApproval = 'WaitingForApproval'
}

export type PostTag = {
  __typename?: 'PostTag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  tag: Tag;
  tagId: Scalars['String']['output'];
};

export type PostTagConnection = {
  __typename?: 'PostTagConnection';
  edges?: Maybe<Array<PostTagEdge>>;
  nodes?: Maybe<Array<PostTag>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostTagCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  post: PostCreateNestedOneWithoutPostTagsInput;
  tag: TagCreateNestedOneWithoutPostTagsInput;
};

export type PostTagCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  tagId: Scalars['String']['input'];
};

export type PostTagCreateManyPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  tagId: Scalars['String']['input'];
};

export type PostTagCreateManyPostInputEnvelope = {
  data: Array<PostTagCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostTagCreateManyTagInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
};

export type PostTagCreateManyTagInputEnvelope = {
  data: Array<PostTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostTagCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PostTagWhereUniqueInput>>;
};

export type PostTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<PostTagWhereUniqueInput>>;
};

export type PostTagCreateOrConnectWithoutPostInput = {
  create: PostTagCreateWithoutPostInput;
  where: PostTagWhereUniqueInput;
};

export type PostTagCreateOrConnectWithoutTagInput = {
  create: PostTagCreateWithoutTagInput;
  where: PostTagWhereUniqueInput;
};

export type PostTagCreateWithoutPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  tag: TagCreateNestedOneWithoutPostTagsInput;
};

export type PostTagCreateWithoutTagInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  post: PostCreateNestedOneWithoutPostTagsInput;
};

export type PostTagEdge = {
  __typename?: 'PostTagEdge';
  cursor: Scalars['String']['output'];
  node: PostTag;
};

export type PostTagListRelationFilter = {
  every?: InputMaybe<PostTagWhereInput>;
  none?: InputMaybe<PostTagWhereInput>;
  some?: InputMaybe<PostTagWhereInput>;
};

export type PostTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostTagOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  tag?: InputMaybe<TagOrderByWithRelationInput>;
  tagId?: InputMaybe<SortOrder>;
};

export enum PostTagScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  PostId = 'postId',
  TagId = 'tagId'
}

export type PostTagScalarWhereInput = {
  AND?: InputMaybe<Array<PostTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostTagScalarWhereInput>>;
  OR?: InputMaybe<Array<PostTagScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  tagId?: InputMaybe<StringFilter>;
};

export type PostTagUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostTagsNestedInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutPostTagsNestedInput>;
};

export type PostTagUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostTagUpdateManyWithWhereWithoutPostInput = {
  data: PostTagUpdateManyMutationInput;
  where: PostTagScalarWhereInput;
};

export type PostTagUpdateManyWithWhereWithoutTagInput = {
  data: PostTagUpdateManyMutationInput;
  where: PostTagScalarWhereInput;
};

export type PostTagUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostTagCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostTagCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostTagCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  set?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  update?: InputMaybe<Array<PostTagUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PostTagUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PostTagUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostTagUpdateManyWithoutTagNestedInput = {
  connect?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<PostTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<PostTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  set?: InputMaybe<Array<PostTagWhereUniqueInput>>;
  update?: InputMaybe<Array<PostTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<PostTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<PostTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
  data: PostTagUpdateWithoutPostInput;
  where: PostTagWhereUniqueInput;
};

export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
  data: PostTagUpdateWithoutTagInput;
  where: PostTagWhereUniqueInput;
};

export type PostTagUpdateWithoutPostInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutPostTagsNestedInput>;
};

export type PostTagUpdateWithoutTagInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostTagsNestedInput>;
};

export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
  create: PostTagCreateWithoutPostInput;
  update: PostTagUpdateWithoutPostInput;
  where: PostTagWhereUniqueInput;
};

export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
  create: PostTagCreateWithoutTagInput;
  update: PostTagUpdateWithoutTagInput;
  where: PostTagWhereUniqueInput;
};

export type PostTagWhereInput = {
  AND?: InputMaybe<Array<PostTagWhereInput>>;
  NOT?: InputMaybe<Array<PostTagWhereInput>>;
  OR?: InputMaybe<Array<PostTagWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  tag?: InputMaybe<TagWhereInput>;
  tagId?: InputMaybe<StringFilter>;
};

export type PostTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type PostTopic = {
  __typename?: 'PostTopic';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  topic: Topic;
  topicId: Scalars['String']['output'];
};

export type PostTopicConnection = {
  __typename?: 'PostTopicConnection';
  edges?: Maybe<Array<PostTopicEdge>>;
  nodes?: Maybe<Array<PostTopic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostTopicCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  post: PostCreateNestedOneWithoutPostTopicsInput;
  topic: TopicCreateNestedOneWithoutPostTopicsInput;
};

export type PostTopicCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  topicId: Scalars['String']['input'];
};

export type PostTopicCreateManyPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  topicId: Scalars['String']['input'];
};

export type PostTopicCreateManyPostInputEnvelope = {
  data: Array<PostTopicCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostTopicCreateManyTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
};

export type PostTopicCreateManyTopicInputEnvelope = {
  data: Array<PostTopicCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostTopicCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
};

export type PostTopicCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
};

export type PostTopicCreateOrConnectWithoutPostInput = {
  create: PostTopicCreateWithoutPostInput;
  where: PostTopicWhereUniqueInput;
};

export type PostTopicCreateOrConnectWithoutTopicInput = {
  create: PostTopicCreateWithoutTopicInput;
  where: PostTopicWhereUniqueInput;
};

export type PostTopicCreateWithoutPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  topic: TopicCreateNestedOneWithoutPostTopicsInput;
};

export type PostTopicCreateWithoutTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  post: PostCreateNestedOneWithoutPostTopicsInput;
};

export type PostTopicEdge = {
  __typename?: 'PostTopicEdge';
  cursor: Scalars['String']['output'];
  node: PostTopic;
};

export type PostTopicListRelationFilter = {
  every?: InputMaybe<PostTopicWhereInput>;
  none?: InputMaybe<PostTopicWhereInput>;
  some?: InputMaybe<PostTopicWhereInput>;
};

export type PostTopicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostTopicOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  topic?: InputMaybe<TopicOrderByWithRelationInput>;
  topicId?: InputMaybe<SortOrder>;
};

export enum PostTopicScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  PostId = 'postId',
  TopicId = 'topicId'
}

export type PostTopicScalarWhereInput = {
  AND?: InputMaybe<Array<PostTopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostTopicScalarWhereInput>>;
  OR?: InputMaybe<Array<PostTopicScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<StringFilter>;
};

export type PostTopicUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostTopicsNestedInput>;
  topic?: InputMaybe<TopicUpdateOneRequiredWithoutPostTopicsNestedInput>;
};

export type PostTopicUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PostTopicUpdateManyWithWhereWithoutPostInput = {
  data: PostTopicUpdateManyMutationInput;
  where: PostTopicScalarWhereInput;
};

export type PostTopicUpdateManyWithWhereWithoutTopicInput = {
  data: PostTopicUpdateManyMutationInput;
  where: PostTopicScalarWhereInput;
};

export type PostTopicUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostTopicCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostTopicCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostTopicCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostTopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  set?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  update?: InputMaybe<Array<PostTopicUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PostTopicUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PostTopicUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostTopicUpdateManyWithoutTopicNestedInput = {
  connect?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostTopicCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<PostTopicCreateWithoutTopicInput>>;
  createMany?: InputMaybe<PostTopicCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostTopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  set?: InputMaybe<Array<PostTopicWhereUniqueInput>>;
  update?: InputMaybe<Array<PostTopicUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<PostTopicUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<PostTopicUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type PostTopicUpdateWithWhereUniqueWithoutPostInput = {
  data: PostTopicUpdateWithoutPostInput;
  where: PostTopicWhereUniqueInput;
};

export type PostTopicUpdateWithWhereUniqueWithoutTopicInput = {
  data: PostTopicUpdateWithoutTopicInput;
  where: PostTopicWhereUniqueInput;
};

export type PostTopicUpdateWithoutPostInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneRequiredWithoutPostTopicsNestedInput>;
};

export type PostTopicUpdateWithoutTopicInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPostTopicsNestedInput>;
};

export type PostTopicUpsertWithWhereUniqueWithoutPostInput = {
  create: PostTopicCreateWithoutPostInput;
  update: PostTopicUpdateWithoutPostInput;
  where: PostTopicWhereUniqueInput;
};

export type PostTopicUpsertWithWhereUniqueWithoutTopicInput = {
  create: PostTopicCreateWithoutTopicInput;
  update: PostTopicUpdateWithoutTopicInput;
  where: PostTopicWhereUniqueInput;
};

export type PostTopicWhereInput = {
  AND?: InputMaybe<Array<PostTopicWhereInput>>;
  NOT?: InputMaybe<Array<PostTopicWhereInput>>;
  OR?: InputMaybe<Array<PostTopicWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  topic?: InputMaybe<TopicWhereInput>;
  topicId?: InputMaybe<StringFilter>;
};

export type PostTopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum PostType {
  Announcement = 'Announcement',
  Campaign = 'Campaign',
  News = 'News'
}

export type PostUpdateManyMutationInput = {
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutApproveByInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutCreatedByInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutUpdatedByInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutApproveByNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutApproveByInput>>;
  create?: InputMaybe<Array<PostCreateWithoutApproveByInput>>;
  createMany?: InputMaybe<PostCreateManyApproveByInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutApproveByInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutApproveByInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutApproveByInput>>;
};

export type PostUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<PostCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<PostCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type PostUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<PostCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<PostCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type PostUpdateOneRequiredWithoutPostCommentsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPostCommentsInput>;
  create?: InputMaybe<PostCreateWithoutPostCommentsInput>;
  update?: InputMaybe<PostUpdateWithoutPostCommentsInput>;
  upsert?: InputMaybe<PostUpsertWithoutPostCommentsInput>;
};

export type PostUpdateOneRequiredWithoutPostIdeasNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPostIdeasInput>;
  create?: InputMaybe<PostCreateWithoutPostIdeasInput>;
  update?: InputMaybe<PostUpdateWithoutPostIdeasInput>;
  upsert?: InputMaybe<PostUpsertWithoutPostIdeasInput>;
};

export type PostUpdateOneRequiredWithoutPostTagsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPostTagsInput>;
  create?: InputMaybe<PostCreateWithoutPostTagsInput>;
  update?: InputMaybe<PostUpdateWithoutPostTagsInput>;
  upsert?: InputMaybe<PostUpsertWithoutPostTagsInput>;
};

export type PostUpdateOneRequiredWithoutPostTopicsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPostTopicsInput>;
  create?: InputMaybe<PostCreateWithoutPostTopicsInput>;
  update?: InputMaybe<PostUpdateWithoutPostTopicsInput>;
  upsert?: InputMaybe<PostUpsertWithoutPostTopicsInput>;
};

export type PostUpdateOneRequiredWithoutPushNotificationDatasNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutPushNotificationDatasInput>;
  create?: InputMaybe<PostCreateWithoutPushNotificationDatasInput>;
  update?: InputMaybe<PostUpdateWithoutPushNotificationDatasInput>;
  upsert?: InputMaybe<PostUpsertWithoutPushNotificationDatasInput>;
};

export type PostUpdateOneRequiredWithoutUserLikedsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutUserLikedsInput>;
  create?: InputMaybe<PostCreateWithoutUserLikedsInput>;
  update?: InputMaybe<PostUpdateWithoutUserLikedsInput>;
  upsert?: InputMaybe<PostUpsertWithoutUserLikedsInput>;
};

export type PostUpdateOneRequiredWithoutUserViewedsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutUserViewedsInput>;
  create?: InputMaybe<PostCreateWithoutUserViewedsInput>;
  update?: InputMaybe<PostUpdateWithoutUserViewedsInput>;
  upsert?: InputMaybe<PostUpsertWithoutUserViewedsInput>;
};

export type PostUpdateOneRequiredWithoutUserVotesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutUserVotesInput>;
  create?: InputMaybe<PostCreateWithoutUserVotesInput>;
  update?: InputMaybe<PostUpdateWithoutUserVotesInput>;
  upsert?: InputMaybe<PostUpsertWithoutUserVotesInput>;
};

export type PostUpdateWithWhereUniqueWithoutApproveByInput = {
  data: PostUpdateWithoutApproveByInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: PostUpdateWithoutCreatedByInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: PostUpdateWithoutUpdatedByInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutApproveByInput = {
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCreatedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutPostCommentsInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutPostIdeasInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutPostTagsInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutPostTopicsInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutPushNotificationDatasInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutUpdatedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutUserLikedsInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutUserViewedsInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutUserVotesInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  commentCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  head?: InputMaybe<StringFieldUpdateOperationsInput>;
  headUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isHot?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isNotice?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  likeCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  postComments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  postIdeas?: InputMaybe<PostIdeaUpdateManyWithoutPostNestedInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutPostNestedInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutPostNestedInput>;
  publishedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataUpdateManyWithoutPostNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPostStatusFieldUpdateOperationsInput>;
  subTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPostTypeFieldUpdateOperationsInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutPostNestedInput>;
  userVieweds?: InputMaybe<UserViewedUpdateManyWithoutPostNestedInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  voteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutApproveByInput = {
  create: PostCreateWithoutApproveByInput;
  update: PostUpdateWithoutApproveByInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: PostCreateWithoutCreatedByInput;
  update: PostUpdateWithoutCreatedByInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: PostCreateWithoutUpdatedByInput;
  update: PostUpdateWithoutUpdatedByInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutPostCommentsInput = {
  create: PostCreateWithoutPostCommentsInput;
  update: PostUpdateWithoutPostCommentsInput;
};

export type PostUpsertWithoutPostIdeasInput = {
  create: PostCreateWithoutPostIdeasInput;
  update: PostUpdateWithoutPostIdeasInput;
};

export type PostUpsertWithoutPostTagsInput = {
  create: PostCreateWithoutPostTagsInput;
  update: PostUpdateWithoutPostTagsInput;
};

export type PostUpsertWithoutPostTopicsInput = {
  create: PostCreateWithoutPostTopicsInput;
  update: PostUpdateWithoutPostTopicsInput;
};

export type PostUpsertWithoutPushNotificationDatasInput = {
  create: PostCreateWithoutPushNotificationDatasInput;
  update: PostUpdateWithoutPushNotificationDatasInput;
};

export type PostUpsertWithoutUserLikedsInput = {
  create: PostCreateWithoutUserLikedsInput;
  update: PostUpdateWithoutUserLikedsInput;
};

export type PostUpsertWithoutUserViewedsInput = {
  create: PostCreateWithoutUserViewedsInput;
  update: PostUpdateWithoutUserViewedsInput;
};

export type PostUpsertWithoutUserVotesInput = {
  create: PostCreateWithoutUserVotesInput;
  update: PostUpdateWithoutUserVotesInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  approveBy?: InputMaybe<UserWhereInput>;
  approveById?: InputMaybe<StringNullableFilter>;
  commentCount?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  endAt?: InputMaybe<DateTimeNullableFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  head?: InputMaybe<StringFilter>;
  headUnAccent?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isHot?: InputMaybe<BoolNullableFilter>;
  isNotice?: InputMaybe<BoolNullableFilter>;
  likeCount?: InputMaybe<IntFilter>;
  postComments?: InputMaybe<CommentListRelationFilter>;
  postIdeas?: InputMaybe<PostIdeaListRelationFilter>;
  postTags?: InputMaybe<PostTagListRelationFilter>;
  postTopics?: InputMaybe<PostTopicListRelationFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  pushNotificationDatas?: InputMaybe<PushNotificationDataListRelationFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  startAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumPostStatusFilter>;
  subTitle?: InputMaybe<StringNullableFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumPostTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userLikeds?: InputMaybe<UserLikedListRelationFilter>;
  userVieweds?: InputMaybe<UserViewedListRelationFilter>;
  userVotes?: InputMaybe<UserVoteListRelationFilter>;
  viewCount?: InputMaybe<IntFilter>;
  voteCount?: InputMaybe<IntFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum PublishStatus {
  Deleted = 'Deleted',
  Published = 'Published',
  Suspended = 'Suspended'
}

export type PushNotificationData = {
  __typename?: 'PushNotificationData';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  pushType: PushType;
  targetType: TargetType;
  targets?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PushNotificationDataConnection = {
  __typename?: 'PushNotificationDataConnection';
  edges?: Maybe<Array<PushNotificationDataEdge>>;
  nodes?: Maybe<Array<PushNotificationData>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PushNotificationDataCreateManyPostInput = {
  pushType?: InputMaybe<PushType>;
  targetType: TargetType;
  targets?: InputMaybe<Scalars['JSON']['input']>;
};

export type PushNotificationDataCreateManyPostInputEnvelope = {
  data: Array<PushNotificationDataCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PushNotificationDataCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PushNotificationDataWhereUniqueInput>>;
};

export type PushNotificationDataCreateOrConnectWithoutPostInput = {
  create: PushNotificationDataCreateWithoutPostInput;
  where: PushNotificationDataWhereUniqueInput;
};

export type PushNotificationDataCreateWithoutPostInput = {
  pushType?: InputMaybe<PushType>;
  targetType: TargetType;
  targets?: InputMaybe<Scalars['JSON']['input']>;
};

export type PushNotificationDataEdge = {
  __typename?: 'PushNotificationDataEdge';
  cursor: Scalars['String']['output'];
  node: PushNotificationData;
};

export type PushNotificationDataListRelationFilter = {
  every?: InputMaybe<PushNotificationDataWhereInput>;
  none?: InputMaybe<PushNotificationDataWhereInput>;
  some?: InputMaybe<PushNotificationDataWhereInput>;
};

export type PushNotificationDataOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PushNotificationDataOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  pushType?: InputMaybe<SortOrder>;
  targetType?: InputMaybe<SortOrder>;
  targets?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PushNotificationDataScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  PushType = 'pushType',
  TargetType = 'targetType',
  Targets = 'targets',
  UpdatedAt = 'updatedAt'
}

export type PushNotificationDataScalarWhereInput = {
  AND?: InputMaybe<Array<PushNotificationDataScalarWhereInput>>;
  NOT?: InputMaybe<Array<PushNotificationDataScalarWhereInput>>;
  OR?: InputMaybe<Array<PushNotificationDataScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  pushType?: InputMaybe<EnumPushTypeFilter>;
  targetType?: InputMaybe<EnumTargetTypeFilter>;
  targets?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PushNotificationDataUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutPushNotificationDatasNestedInput>;
  pushType?: InputMaybe<EnumPushTypeFieldUpdateOperationsInput>;
  targetType?: InputMaybe<EnumTargetTypeFieldUpdateOperationsInput>;
  targets?: InputMaybe<Scalars['JSON']['input']>;
};

export type PushNotificationDataUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushType?: InputMaybe<EnumPushTypeFieldUpdateOperationsInput>;
  targetType?: InputMaybe<EnumTargetTypeFieldUpdateOperationsInput>;
  targets?: InputMaybe<Scalars['JSON']['input']>;
};

export type PushNotificationDataUpdateManyWithWhereWithoutPostInput = {
  data: PushNotificationDataUpdateManyMutationInput;
  where: PushNotificationDataScalarWhereInput;
};

export type PushNotificationDataUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PushNotificationDataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PushNotificationDataCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PushNotificationDataCreateWithoutPostInput>>;
  createMany?: InputMaybe<PushNotificationDataCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PushNotificationDataWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PushNotificationDataScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PushNotificationDataWhereUniqueInput>>;
  set?: InputMaybe<Array<PushNotificationDataWhereUniqueInput>>;
  update?: InputMaybe<Array<PushNotificationDataUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PushNotificationDataUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PushNotificationDataUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PushNotificationDataUpdateWithWhereUniqueWithoutPostInput = {
  data: PushNotificationDataUpdateWithoutPostInput;
  where: PushNotificationDataWhereUniqueInput;
};

export type PushNotificationDataUpdateWithoutPostInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushType?: InputMaybe<EnumPushTypeFieldUpdateOperationsInput>;
  targetType?: InputMaybe<EnumTargetTypeFieldUpdateOperationsInput>;
  targets?: InputMaybe<Scalars['JSON']['input']>;
};

export type PushNotificationDataUpsertWithWhereUniqueWithoutPostInput = {
  create: PushNotificationDataCreateWithoutPostInput;
  update: PushNotificationDataUpdateWithoutPostInput;
  where: PushNotificationDataWhereUniqueInput;
};

export type PushNotificationDataWhereInput = {
  AND?: InputMaybe<Array<PushNotificationDataWhereInput>>;
  NOT?: InputMaybe<Array<PushNotificationDataWhereInput>>;
  OR?: InputMaybe<Array<PushNotificationDataWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  pushType?: InputMaybe<EnumPushTypeFilter>;
  targetType?: InputMaybe<EnumTargetTypeFilter>;
  targets?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PushNotificationDataWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type PushNotificationInput = {
  pushType?: InputMaybe<PushType>;
  targetType?: InputMaybe<TargetType>;
  targets?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PushType {
  All = 'All',
  Department = 'Department',
  User = 'User'
}

export type Query = {
  __typename?: 'Query';
  adminPostDetail: Post;
  adminPosts: PostConnection;
  award: Award;
  awards: AwardConnection;
  banner: Banner;
  bannerGroup: BannerGroup;
  bannerGroups: BannerGroupConnection;
  banners: BannerConnection;
  comment: Comment;
  comments: CommentConnection;
  countEventsInRange: Array<CountEvent>;
  department: Department;
  departments: DepartmentConnection;
  event: Event;
  events: EventConnection;
  feedback: Feedback;
  feedbacks: FeedbackConnection;
  findPostsWithTagTopic: CustomPostConnection;
  findUpcomingBirthdayUsers: UserConnection;
  getAllUsers: Array<User>;
  getUserPermissions: Array<Scalars['String']['output']>;
  getUserStatuses: UserStatusCounts;
  idea: Idea;
  ideaTags: IdeaTagConnection;
  ideaTopics: IdeaTopicConnection;
  ideas: IdeaConnection;
  industries: IndustryConnection;
  industry: Industry;
  log: Log;
  logs: LogConnection;
  me: User;
  myCampaigns: Array<Post>;
  myLikedPosts: PostConnection;
  myNotifications: NotificationConnection;
  newsfeed: PostConnection;
  notificationDetail: Notification;
  notifications: NotificationConnection;
  post: CustomPost;
  postIdea: PostIdea;
  postIdeas: PostIdeaConnection;
  postLikedUsers: UserConnection;
  postTag: PostTag;
  postTags: PostTagConnection;
  postTopic: PostTopic;
  postTopics: PostTopicConnection;
  postViewedUsers: UserConnection;
  posts: CustomPostConnection;
  pushNotificationDatas: PushNotificationDataConnection;
  question: Question;
  questionTopics: QuestionTopicConnection;
  questions: QuestionConnection;
  tag: Tag;
  tags: TagConnection;
  topic: Topic;
  topics: TopicConnection;
  upcomingEvents: Array<Event>;
  user: User;
  userApprover: UserApprover;
  userApprovers: UserApproverConnection;
  userAward: UserAward;
  userAwards: UserAwardConnection;
  userIndustries: UserIndustryConnection;
  userIndustry: UserIndustry;
  userLiked: Array<UserLiked>;
  userLikeds: UserLikedConnection;
  userSearchHistories: UserSearchHistoryConnection;
  userSearchHistory: UserSearchHistory;
  userVieweds: UserViewedConnection;
  userVote: UserVote;
  userVotes: UserVoteConnection;
  users: UserConnection;
};


export type QueryAdminPostDetailArgs = {
  where: PostWhereUniqueInput;
};


export type QueryAdminPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAwardArgs = {
  where: AwardWhereUniqueInput;
};


export type QueryAwardsArgs = {
  cursor?: InputMaybe<AwardWhereUniqueInput>;
  distinct?: InputMaybe<Array<AwardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AwardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AwardWhereInput>;
};


export type QueryBannerArgs = {
  where: BannerWhereUniqueInput;
};


export type QueryBannerGroupArgs = {
  where: BannerGroupWhereUniqueInput;
};


export type QueryBannerGroupsArgs = {
  cursor?: InputMaybe<BannerGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<BannerGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BannerGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannerGroupWhereInput>;
};


export type QueryBannersArgs = {
  cursor?: InputMaybe<BannerWhereUniqueInput>;
  distinct?: InputMaybe<Array<BannerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BannerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannerWhereInput>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryCountEventsInRangeArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


export type QueryDepartmentsArgs = {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};


export type QueryFeedbacksArgs = {
  cursor?: InputMaybe<FeedbackWhereUniqueInput>;
  distinct?: InputMaybe<Array<FeedbackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FeedbackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeedbackWhereInput>;
};


export type QueryFindPostsWithTagTopicArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  topicIds?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindUpcomingBirthdayUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryIdeaArgs = {
  where: IdeaWhereUniqueInput;
};


export type QueryIdeaTagsArgs = {
  cursor?: InputMaybe<IdeaTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<IdeaTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IdeaTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IdeaTagWhereInput>;
};


export type QueryIdeaTopicsArgs = {
  cursor?: InputMaybe<IdeaTopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<IdeaTopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IdeaTopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IdeaTopicWhereInput>;
};


export type QueryIdeasArgs = {
  cursor?: InputMaybe<IdeaWhereUniqueInput>;
  distinct?: InputMaybe<Array<IdeaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IdeaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IdeaWhereInput>;
};


export type QueryIndustriesArgs = {
  cursor?: InputMaybe<IndustryWhereUniqueInput>;
  distinct?: InputMaybe<Array<IndustryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IndustryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndustryWhereInput>;
};


export type QueryIndustryArgs = {
  where: IndustryWhereUniqueInput;
};


export type QueryLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryLogsArgs = {
  cursor?: InputMaybe<LogWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryMyCampaignsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryMyNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryNewsfeedArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryNotificationDetailArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostIdeaArgs = {
  where: PostIdeaWhereUniqueInput;
};


export type QueryPostIdeasArgs = {
  cursor?: InputMaybe<PostIdeaWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostIdeaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostIdeaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostIdeaWhereInput>;
};


export type QueryPostLikedUsersArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostTagArgs = {
  where: PostTagWhereUniqueInput;
};


export type QueryPostTagsArgs = {
  cursor?: InputMaybe<PostTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostTagWhereInput>;
};


export type QueryPostTopicArgs = {
  where: PostTopicWhereUniqueInput;
};


export type QueryPostTopicsArgs = {
  cursor?: InputMaybe<PostTopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostTopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostTopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostTopicWhereInput>;
};


export type QueryPostViewedUsersArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPushNotificationDatasArgs = {
  cursor?: InputMaybe<PushNotificationDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<PushNotificationDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PushNotificationDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PushNotificationDataWhereInput>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionTopicsArgs = {
  cursor?: InputMaybe<QuestionTopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionTopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionTopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionTopicWhereInput>;
};


export type QueryQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type QueryTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryUpcomingEventsArgs = {
  startQueryDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserApproverArgs = {
  where: UserApproverWhereUniqueInput;
};


export type QueryUserApproversArgs = {
  cursor?: InputMaybe<UserApproverWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserApproverScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserApproverOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserApproverWhereInput>;
};


export type QueryUserAwardArgs = {
  where: UserAwardWhereUniqueInput;
};


export type QueryUserAwardsArgs = {
  cursor?: InputMaybe<UserAwardWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAwardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAwardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAwardWhereInput>;
};


export type QueryUserIndustriesArgs = {
  cursor?: InputMaybe<UserIndustryWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserIndustryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserIndustryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserIndustryWhereInput>;
};


export type QueryUserIndustryArgs = {
  where: UserIndustryWhereUniqueInput;
};


export type QueryUserLikedArgs = {
  where: UserLikedWhereUniqueWithRelationInput;
};


export type QueryUserLikedsArgs = {
  cursor?: InputMaybe<UserLikedWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserLikedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserLikedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserLikedWhereInput>;
};


export type QueryUserSearchHistoriesArgs = {
  cursor?: InputMaybe<UserSearchHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSearchHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSearchHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserSearchHistoryWhereInput>;
};


export type QueryUserSearchHistoryArgs = {
  where: UserSearchHistoryWhereUniqueInput;
};


export type QueryUserViewedsArgs = {
  cursor?: InputMaybe<UserViewedWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserViewedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserViewedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserViewedWhereInput>;
};


export type QueryUserVoteArgs = {
  where: UserVoteWhereUniqueInput;
};


export type QueryUserVotesArgs = {
  cursor?: InputMaybe<UserVoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserVoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserVoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserVoteWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  _count: QuestionCount;
  approveBy?: Maybe<User>;
  approveById?: Maybe<Scalars['String']['output']>;
  attachments?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contentUnAccent?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  department: Department;
  departmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industry: Industry;
  industryId: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  originalContent?: Maybe<Scalars['JSON']['output']>;
  questionTopics?: Maybe<Array<QuestionTopic>>;
  readAt?: Maybe<Scalars['DateTime']['output']>;
  readToken?: Maybe<Scalars['String']['output']>;
  replyContent?: Maybe<Scalars['String']['output']>;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedBy?: Maybe<User>;
  resolvedById?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: QuestionStatus;
  title: Scalars['String']['output'];
  titleUnAccent?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  edges?: Maybe<Array<QuestionEdge>>;
  nodes?: Maybe<Array<Question>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QuestionCount = {
  __typename?: 'QuestionCount';
  questionTopics: Scalars['Int']['output'];
};

export type QuestionCreateInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyApproveByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedById?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyApproveByInputEnvelope = {
  data: Array<QuestionCreateManyApproveByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateManyCreatedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedById?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyCreatedByInputEnvelope = {
  data: Array<QuestionCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateManyDepartmentInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedById?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyDepartmentInputEnvelope = {
  data: Array<QuestionCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateManyIndustryInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedById?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyIndustryInputEnvelope = {
  data: Array<QuestionCreateManyIndustryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateManyResolvedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyResolvedByInputEnvelope = {
  data: Array<QuestionCreateManyResolvedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateManyUpdatedByInput = {
  approveById?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  departmentId: Scalars['String']['input'];
  industryId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedById?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyUpdatedByInputEnvelope = {
  data: Array<QuestionCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateNestedManyWithoutApproveByInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedManyWithoutIndustryInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedManyWithoutResolvedByInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedOneWithoutQuestionTopicsInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
};

export type QuestionCreateOrConnectWithoutApproveByInput = {
  create: QuestionCreateWithoutApproveByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutCreatedByInput = {
  create: QuestionCreateWithoutCreatedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutDepartmentInput = {
  create: QuestionCreateWithoutDepartmentInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutIndustryInput = {
  create: QuestionCreateWithoutIndustryInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutQuestionTopicsInput = {
  create: QuestionCreateWithoutQuestionTopicsInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutResolvedByInput = {
  create: QuestionCreateWithoutResolvedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutUpdatedByInput = {
  create: QuestionCreateWithoutUpdatedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutApproveByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateWithoutCreatedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateWithoutDepartmentInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateWithoutIndustryInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateWithoutQuestionTopicsInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateWithoutResolvedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateWithoutUpdatedByInput = {
  approveBy?: InputMaybe<UserCreateNestedOneWithoutApproveQuestionsInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentUnAccent?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentCreateNestedOneWithoutQuestionsInput;
  industry: IndustryCreateNestedOneWithoutQuestionsInput;
  note?: InputMaybe<Scalars['String']['input']>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutQuestionInput>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  readToken?: InputMaybe<Scalars['String']['input']>;
  replyContent?: InputMaybe<Scalars['String']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<UserCreateNestedOneWithoutResolvedQuestionsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuestionStatus>;
  title: Scalars['String']['input'];
  titleUnAccent?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionEdge = {
  __typename?: 'QuestionEdge';
  cursor: Scalars['String']['output'];
  node: Question;
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  approveBy?: InputMaybe<UserOrderByWithRelationInput>;
  approveById?: InputMaybe<SortOrder>;
  attachments?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  contentUnAccent?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  departmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<IndustryOrderByWithRelationInput>;
  industryId?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  originalContent?: InputMaybe<SortOrder>;
  questionTopics?: InputMaybe<QuestionTopicOrderByRelationAggregateInput>;
  readAt?: InputMaybe<SortOrder>;
  readToken?: InputMaybe<SortOrder>;
  replyContent?: InputMaybe<SortOrder>;
  resolvedAt?: InputMaybe<SortOrder>;
  resolvedBy?: InputMaybe<UserOrderByWithRelationInput>;
  resolvedById?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  titleUnAccent?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum QuestionScalarFieldEnum {
  ApproveById = 'approveById',
  Attachments = 'attachments',
  Content = 'content',
  ContentUnAccent = 'contentUnAccent',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  DepartmentId = 'departmentId',
  Id = 'id',
  IndustryId = 'industryId',
  Note = 'note',
  OriginalContent = 'originalContent',
  ReadAt = 'readAt',
  ReadToken = 'readToken',
  ReplyContent = 'replyContent',
  ResolvedAt = 'resolvedAt',
  ResolvedById = 'resolvedById',
  Slug = 'slug',
  Status = 'status',
  Title = 'title',
  TitleUnAccent = 'titleUnAccent',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  approveById?: InputMaybe<StringNullableFilter>;
  attachments?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  departmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  industryId?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  originalContent?: InputMaybe<JsonNullableFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  readToken?: InputMaybe<StringNullableFilter>;
  replyContent?: InputMaybe<StringNullableFilter>;
  resolvedAt?: InputMaybe<DateTimeNullableFilter>;
  resolvedById?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumQuestionStatusFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export enum QuestionStatus {
  Approved = 'Approved',
  Duplicate = 'Duplicate',
  Rejected = 'Rejected',
  Resolved = 'Resolved',
  WaitingForApproval = 'WaitingForApproval'
}

export type QuestionTopic = {
  __typename?: 'QuestionTopic';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  question: Question;
  questionId: Scalars['String']['output'];
  topic: Topic;
  topicId: Scalars['String']['output'];
};

export type QuestionTopicConnection = {
  __typename?: 'QuestionTopicConnection';
  edges?: Maybe<Array<QuestionTopicEdge>>;
  nodes?: Maybe<Array<QuestionTopic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QuestionTopicCreateManyQuestionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  topicId: Scalars['String']['input'];
};

export type QuestionTopicCreateManyQuestionInputEnvelope = {
  data: Array<QuestionTopicCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionTopicCreateManyTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
};

export type QuestionTopicCreateManyTopicInputEnvelope = {
  data: Array<QuestionTopicCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionTopicCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
};

export type QuestionTopicCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
};

export type QuestionTopicCreateOrConnectWithoutQuestionInput = {
  create: QuestionTopicCreateWithoutQuestionInput;
  where: QuestionTopicWhereUniqueInput;
};

export type QuestionTopicCreateOrConnectWithoutTopicInput = {
  create: QuestionTopicCreateWithoutTopicInput;
  where: QuestionTopicWhereUniqueInput;
};

export type QuestionTopicCreateWithoutQuestionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  topic: TopicCreateNestedOneWithoutQuestionTopicsInput;
};

export type QuestionTopicCreateWithoutTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  question: QuestionCreateNestedOneWithoutQuestionTopicsInput;
};

export type QuestionTopicEdge = {
  __typename?: 'QuestionTopicEdge';
  cursor: Scalars['String']['output'];
  node: QuestionTopic;
};

export type QuestionTopicListRelationFilter = {
  every?: InputMaybe<QuestionTopicWhereInput>;
  none?: InputMaybe<QuestionTopicWhereInput>;
  some?: InputMaybe<QuestionTopicWhereInput>;
};

export type QuestionTopicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionTopicOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByWithRelationInput>;
  questionId?: InputMaybe<SortOrder>;
  topic?: InputMaybe<TopicOrderByWithRelationInput>;
  topicId?: InputMaybe<SortOrder>;
};

export enum QuestionTopicScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  QuestionId = 'questionId',
  TopicId = 'topicId'
}

export type QuestionTopicScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionTopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionTopicScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionTopicScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  questionId?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<StringFilter>;
};

export type QuestionTopicUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionTopicUpdateManyWithWhereWithoutQuestionInput = {
  data: QuestionTopicUpdateManyMutationInput;
  where: QuestionTopicScalarWhereInput;
};

export type QuestionTopicUpdateManyWithWhereWithoutTopicInput = {
  data: QuestionTopicUpdateManyMutationInput;
  where: QuestionTopicScalarWhereInput;
};

export type QuestionTopicUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionTopicCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<QuestionTopicCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<QuestionTopicCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionTopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<QuestionTopicUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type QuestionTopicUpdateManyWithoutTopicNestedInput = {
  connect?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionTopicCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<QuestionTopicCreateWithoutTopicInput>>;
  createMany?: InputMaybe<QuestionTopicCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionTopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionTopicWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionTopicUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<QuestionTopicUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<QuestionTopicUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput = {
  data: QuestionTopicUpdateWithoutQuestionInput;
  where: QuestionTopicWhereUniqueInput;
};

export type QuestionTopicUpdateWithWhereUniqueWithoutTopicInput = {
  data: QuestionTopicUpdateWithoutTopicInput;
  where: QuestionTopicWhereUniqueInput;
};

export type QuestionTopicUpdateWithoutQuestionInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneRequiredWithoutQuestionTopicsNestedInput>;
};

export type QuestionTopicUpdateWithoutTopicInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutQuestionTopicsNestedInput>;
};

export type QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput = {
  create: QuestionTopicCreateWithoutQuestionInput;
  update: QuestionTopicUpdateWithoutQuestionInput;
  where: QuestionTopicWhereUniqueInput;
};

export type QuestionTopicUpsertWithWhereUniqueWithoutTopicInput = {
  create: QuestionTopicCreateWithoutTopicInput;
  update: QuestionTopicUpdateWithoutTopicInput;
  where: QuestionTopicWhereUniqueInput;
};

export type QuestionTopicWhereInput = {
  AND?: InputMaybe<Array<QuestionTopicWhereInput>>;
  NOT?: InputMaybe<Array<QuestionTopicWhereInput>>;
  OR?: InputMaybe<Array<QuestionTopicWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionWhereInput>;
  questionId?: InputMaybe<StringFilter>;
  topic?: InputMaybe<TopicWhereInput>;
  topicId?: InputMaybe<StringFilter>;
};

export type QuestionTopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionUpdateInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutApproveByInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutCreatedByInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutDepartmentInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutIndustryInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutResolvedByInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutUpdatedByInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutApproveByNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutApproveByInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutApproveByInput>>;
  createMany?: InputMaybe<QuestionCreateManyApproveByInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutApproveByInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutApproveByInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutApproveByInput>>;
};

export type QuestionUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<QuestionCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type QuestionUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<QuestionCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type QuestionUpdateManyWithoutIndustryNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutIndustryInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutIndustryInput>>;
  createMany?: InputMaybe<QuestionCreateManyIndustryInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutIndustryInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutIndustryInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutIndustryInput>>;
};

export type QuestionUpdateManyWithoutResolvedByNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutResolvedByInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutResolvedByInput>>;
  createMany?: InputMaybe<QuestionCreateManyResolvedByInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutResolvedByInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutResolvedByInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutResolvedByInput>>;
};

export type QuestionUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<QuestionCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type QuestionUpdateOneRequiredWithoutQuestionTopicsNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestionTopicsInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestionTopicsInput>;
  update?: InputMaybe<QuestionUpdateWithoutQuestionTopicsInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutQuestionTopicsInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutApproveByInput = {
  data: QuestionUpdateWithoutApproveByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: QuestionUpdateWithoutCreatedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: QuestionUpdateWithoutDepartmentInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutIndustryInput = {
  data: QuestionUpdateWithoutIndustryInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutResolvedByInput = {
  data: QuestionUpdateWithoutResolvedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: QuestionUpdateWithoutUpdatedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutApproveByInput = {
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutCreatedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutDepartmentInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutIndustryInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutQuestionTopicsInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutResolvedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutUpdatedByInput = {
  approveBy?: InputMaybe<UserUpdateOneWithoutApproveQuestionsNestedInput>;
  attachments?: InputMaybe<Scalars['JSON']['input']>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  contentUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutQuestionsNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalContent?: InputMaybe<Scalars['JSON']['input']>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutQuestionNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  readToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replyContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<UserUpdateOneWithoutResolvedQuestionsNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumQuestionStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  titleUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutApproveByInput = {
  create: QuestionCreateWithoutApproveByInput;
  update: QuestionUpdateWithoutApproveByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: QuestionCreateWithoutCreatedByInput;
  update: QuestionUpdateWithoutCreatedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: QuestionCreateWithoutDepartmentInput;
  update: QuestionUpdateWithoutDepartmentInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutIndustryInput = {
  create: QuestionCreateWithoutIndustryInput;
  update: QuestionUpdateWithoutIndustryInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutResolvedByInput = {
  create: QuestionCreateWithoutResolvedByInput;
  update: QuestionUpdateWithoutResolvedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: QuestionCreateWithoutUpdatedByInput;
  update: QuestionUpdateWithoutUpdatedByInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithoutQuestionTopicsInput = {
  create: QuestionCreateWithoutQuestionTopicsInput;
  update: QuestionUpdateWithoutQuestionTopicsInput;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  approveBy?: InputMaybe<UserWhereInput>;
  approveById?: InputMaybe<StringNullableFilter>;
  attachments?: InputMaybe<JsonNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  contentUnAccent?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  department?: InputMaybe<DepartmentWhereInput>;
  departmentId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  industry?: InputMaybe<IndustryWhereInput>;
  industryId?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  originalContent?: InputMaybe<JsonNullableFilter>;
  questionTopics?: InputMaybe<QuestionTopicListRelationFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  readToken?: InputMaybe<StringNullableFilter>;
  replyContent?: InputMaybe<StringNullableFilter>;
  resolvedAt?: InputMaybe<DateTimeNullableFilter>;
  resolvedBy?: InputMaybe<UserWhereInput>;
  resolvedById?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumQuestionStatusFilter>;
  title?: InputMaybe<StringFilter>;
  titleUnAccent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type RoleCreateManyCreatedByInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RoleCreateManyCreatedByInputEnvelope = {
  data: Array<RoleCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleCreateManyUpdatedByInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RoleCreateManyUpdatedByInputEnvelope = {
  data: Array<RoleCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleCreateOrConnectWithoutCreatedByInput = {
  create: RoleCreateWithoutCreatedByInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateOrConnectWithoutUpdatedByInput = {
  create: RoleCreateWithoutUpdatedByInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutCreatedByInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RoleCreateWithoutUpdatedByInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoleScalarWhereInput = {
  AND?: InputMaybe<Array<RoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<RoleScalarWhereInput>>;
  OR?: InputMaybe<Array<RoleScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type RoleUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpdateManyWithWhereWithoutCreatedByInput = {
  data: RoleUpdateManyMutationInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithWhereWithoutUpdatedByInput = {
  data: RoleUpdateManyMutationInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<RoleCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<RoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
  update?: InputMaybe<Array<RoleUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<RoleUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<RoleUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type RoleUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<RoleCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<RoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
  update?: InputMaybe<Array<RoleUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<RoleUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<RoleUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type RoleUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: RoleUpdateWithoutCreatedByInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: RoleUpdateWithoutUpdatedByInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithoutCreatedByInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpdateWithoutUpdatedByInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: RoleCreateWithoutCreatedByInput;
  update: RoleUpdateWithoutCreatedByInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: RoleCreateWithoutUpdatedByInput;
  update: RoleUpdateWithoutUpdatedByInput;
  where: RoleWhereUniqueInput;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StatusCount = {
  __typename?: 'StatusCount';
  totalCount: Scalars['Int']['output'];
  value: Array<User>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeNotifications: Notification;
};


export type SubscriptionSubscribeNotificationsArgs = {
  userId: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  _count: TagCount;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ideaTags?: Maybe<Array<IdeaTag>>;
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  postTags?: Maybe<Array<PostTag>>;
  sortOrder: Scalars['Int']['output'];
  status: ActiveStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  edges?: Maybe<Array<TagEdge>>;
  nodes?: Maybe<Array<Tag>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagCount = {
  __typename?: 'TagCount';
  ideaTags: Scalars['Int']['output'];
  postTags: Scalars['Int']['output'];
};

export type TagCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutTagInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutTagInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateManyCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateManyCreatedByInputEnvelope = {
  data: Array<TagCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCreateManyInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateManyUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateManyUpdatedByInputEnvelope = {
  data: Array<TagCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagCreateNestedOneWithoutIdeaTagsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
};

export type TagCreateNestedOneWithoutPostTagsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
};

export type TagCreateOrConnectWithoutCreatedByInput = {
  create: TagCreateWithoutCreatedByInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutIdeaTagsInput = {
  create: TagCreateWithoutIdeaTagsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutPostTagsInput = {
  create: TagCreateWithoutPostTagsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutUpdatedByInput = {
  create: TagCreateWithoutUpdatedByInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutCreatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutTagInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutTagInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateWithoutIdeaTagsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutTagInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateWithoutPostTagsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutTagInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagCreateWithoutUpdatedByInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTags?: InputMaybe<IdeaTagCreateNestedManyWithoutTagInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTags?: InputMaybe<PostTagCreateNestedManyWithoutTagInput>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String']['output'];
  node: Tag;
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ideaTags?: InputMaybe<IdeaTagOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  postTags?: InputMaybe<PostTagOrderByRelationAggregateInput>;
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  SortOrder = 'sortOrder',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type TagUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutTagNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutTagNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutCreatedByInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutUpdatedByInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<TagCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<TagCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type TagUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<TagCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type TagUpdateOneRequiredWithoutIdeaTagsNestedInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutIdeaTagsInput>;
  create?: InputMaybe<TagCreateWithoutIdeaTagsInput>;
  update?: InputMaybe<TagUpdateWithoutIdeaTagsInput>;
  upsert?: InputMaybe<TagUpsertWithoutIdeaTagsInput>;
};

export type TagUpdateOneRequiredWithoutPostTagsNestedInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutPostTagsInput>;
  create?: InputMaybe<TagCreateWithoutPostTagsInput>;
  update?: InputMaybe<TagUpdateWithoutPostTagsInput>;
  upsert?: InputMaybe<TagUpsertWithoutPostTagsInput>;
};

export type TagUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: TagUpdateWithoutCreatedByInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: TagUpdateWithoutUpdatedByInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutCreatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutTagNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutTagNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutIdeaTagsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutTagNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutPostTagsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutTagNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutUpdatedByInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTags?: InputMaybe<IdeaTagUpdateManyWithoutTagNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTags?: InputMaybe<PostTagUpdateManyWithoutTagNestedInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: TagCreateWithoutCreatedByInput;
  update: TagUpdateWithoutCreatedByInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: TagCreateWithoutUpdatedByInput;
  update: TagUpdateWithoutUpdatedByInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithoutIdeaTagsInput = {
  create: TagCreateWithoutIdeaTagsInput;
  update: TagUpdateWithoutIdeaTagsInput;
};

export type TagUpsertWithoutPostTagsInput = {
  create: TagCreateWithoutPostTagsInput;
  update: TagUpdateWithoutPostTagsInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ideaTags?: InputMaybe<IdeaTagListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  postTags?: InputMaybe<PostTagListRelationFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum TargetType {
  Announcement = 'Announcement',
  Campaign = 'Campaign',
  Event = 'Event',
  Feedback = 'Feedback',
  Idea = 'Idea',
  News = 'News',
  Question = 'Question'
}

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  _count: TopicCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ideaTopics?: Maybe<Array<IdeaTopic>>;
  name: Scalars['String']['output'];
  nameUnAccent?: Maybe<Scalars['String']['output']>;
  postTopics?: Maybe<Array<PostTopic>>;
  questionTopics?: Maybe<Array<QuestionTopic>>;
  slug?: Maybe<Scalars['String']['output']>;
  sortOrder: Scalars['Int']['output'];
  status: ActiveStatus;
  type: TopicType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type TopicConnection = {
  __typename?: 'TopicConnection';
  edges?: Maybe<Array<TopicEdge>>;
  nodes?: Maybe<Array<Topic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TopicCount = {
  __typename?: 'TopicCount';
  ideaTopics: Scalars['Int']['output'];
  postTopics: Scalars['Int']['output'];
  questionTopics: Scalars['Int']['output'];
};

export type TopicCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutTopicInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutTopicInput>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateManyCreatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateManyCreatedByInputEnvelope = {
  data: Array<TopicCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateManyUpdatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateManyUpdatedByInputEnvelope = {
  data: Array<TopicCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
};

export type TopicCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
};

export type TopicCreateNestedOneWithoutIdeaTopicsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
};

export type TopicCreateNestedOneWithoutPostTopicsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
};

export type TopicCreateNestedOneWithoutQuestionTopicsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
};

export type TopicCreateOrConnectWithoutCreatedByInput = {
  create: TopicCreateWithoutCreatedByInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutIdeaTopicsInput = {
  create: TopicCreateWithoutIdeaTopicsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutPostTopicsInput = {
  create: TopicCreateWithoutPostTopicsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutQuestionTopicsInput = {
  create: TopicCreateWithoutQuestionTopicsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutUpdatedByInput = {
  create: TopicCreateWithoutUpdatedByInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateWithoutCreatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutTopicInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutTopicInput>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateWithoutIdeaTopicsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutTopicInput>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateWithoutPostTopicsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutTopicInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateWithoutQuestionTopicsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutTopicInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicCreateWithoutUpdatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaTopics?: InputMaybe<IdeaTopicCreateNestedManyWithoutTopicInput>;
  name: Scalars['String']['input'];
  nameUnAccent?: InputMaybe<Scalars['String']['input']>;
  postTopics?: InputMaybe<PostTopicCreateNestedManyWithoutTopicInput>;
  questionTopics?: InputMaybe<QuestionTopicCreateNestedManyWithoutTopicInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TopicType>;
};

export type TopicEdge = {
  __typename?: 'TopicEdge';
  cursor: Scalars['String']['output'];
  node: Topic;
};

export type TopicListRelationFilter = {
  every?: InputMaybe<TopicWhereInput>;
  none?: InputMaybe<TopicWhereInput>;
  some?: InputMaybe<TopicWhereInput>;
};

export type TopicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TopicOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ideaTopics?: InputMaybe<IdeaTopicOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  nameUnAccent?: InputMaybe<SortOrder>;
  postTopics?: InputMaybe<PostTopicOrderByRelationAggregateInput>;
  questionTopics?: InputMaybe<QuestionTopicOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
};

export enum TopicScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  NameUnAccent = 'nameUnAccent',
  Slug = 'slug',
  SortOrder = 'sortOrder',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type TopicScalarWhereInput = {
  AND?: InputMaybe<Array<TopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<TopicScalarWhereInput>>;
  OR?: InputMaybe<Array<TopicScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  type?: InputMaybe<EnumTopicTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export enum TopicType {
  Announcement = 'Announcement',
  Campaign = 'Campaign',
  Idea = 'Idea',
  News = 'News',
  Question = 'Question'
}

export type TopicUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutTopicNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutTopicNestedInput>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutTopicNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpdateManyWithWhereWithoutCreatedByInput = {
  data: TopicUpdateManyMutationInput;
  where: TopicScalarWhereInput;
};

export type TopicUpdateManyWithWhereWithoutUpdatedByInput = {
  data: TopicUpdateManyMutationInput;
  where: TopicScalarWhereInput;
};

export type TopicUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<TopicCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<TopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicWhereUniqueInput>>;
  update?: InputMaybe<Array<TopicUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<TopicUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<TopicUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type TopicUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<TopicCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<TopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicWhereUniqueInput>>;
  update?: InputMaybe<Array<TopicUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<TopicUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<TopicUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type TopicUpdateOneRequiredWithoutIdeaTopicsNestedInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutIdeaTopicsInput>;
  create?: InputMaybe<TopicCreateWithoutIdeaTopicsInput>;
  update?: InputMaybe<TopicUpdateWithoutIdeaTopicsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutIdeaTopicsInput>;
};

export type TopicUpdateOneRequiredWithoutPostTopicsNestedInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutPostTopicsInput>;
  create?: InputMaybe<TopicCreateWithoutPostTopicsInput>;
  update?: InputMaybe<TopicUpdateWithoutPostTopicsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutPostTopicsInput>;
};

export type TopicUpdateOneRequiredWithoutQuestionTopicsNestedInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutQuestionTopicsInput>;
  create?: InputMaybe<TopicCreateWithoutQuestionTopicsInput>;
  update?: InputMaybe<TopicUpdateWithoutQuestionTopicsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutQuestionTopicsInput>;
};

export type TopicUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: TopicUpdateWithoutCreatedByInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: TopicUpdateWithoutUpdatedByInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateWithoutCreatedByInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutTopicNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutTopicNestedInput>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutTopicNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpdateWithoutIdeaTopicsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutTopicNestedInput>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutTopicNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpdateWithoutPostTopicsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutTopicNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutTopicNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpdateWithoutQuestionTopicsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutTopicNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutTopicNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpdateWithoutUpdatedByInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideaTopics?: InputMaybe<IdeaTopicUpdateManyWithoutTopicNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postTopics?: InputMaybe<PostTopicUpdateManyWithoutTopicNestedInput>;
  questionTopics?: InputMaybe<QuestionTopicUpdateManyWithoutTopicNestedInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sortOrder?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTopicTypeFieldUpdateOperationsInput>;
};

export type TopicUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: TopicCreateWithoutCreatedByInput;
  update: TopicUpdateWithoutCreatedByInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: TopicCreateWithoutUpdatedByInput;
  update: TopicUpdateWithoutUpdatedByInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpsertWithoutIdeaTopicsInput = {
  create: TopicCreateWithoutIdeaTopicsInput;
  update: TopicUpdateWithoutIdeaTopicsInput;
};

export type TopicUpsertWithoutPostTopicsInput = {
  create: TopicCreateWithoutPostTopicsInput;
  update: TopicUpdateWithoutPostTopicsInput;
};

export type TopicUpsertWithoutQuestionTopicsInput = {
  create: TopicCreateWithoutQuestionTopicsInput;
  update: TopicUpdateWithoutQuestionTopicsInput;
};

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ideaTopics?: InputMaybe<IdeaTopicListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nameUnAccent?: InputMaybe<StringNullableFilter>;
  postTopics?: InputMaybe<PostTopicListRelationFilter>;
  questionTopics?: InputMaybe<QuestionTopicListRelationFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  sortOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  type?: InputMaybe<EnumTopicTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type TopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  approveQuestions?: Maybe<Array<Question>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  backgroundUrl?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime']['output'];
  createdAwards?: Maybe<Array<Award>>;
  createdBannerGroups?: Maybe<Array<BannerGroup>>;
  createdBanners?: Maybe<Array<Banner>>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  createdComments?: Maybe<Array<Comment>>;
  createdDepartments?: Maybe<Array<Department>>;
  createdEvents?: Maybe<Array<Event>>;
  createdFeedbacks?: Maybe<Array<Feedback>>;
  createdIdeas?: Maybe<Array<Idea>>;
  createdIndustries?: Maybe<Array<Industry>>;
  createdNotifications?: Maybe<Array<Notification>>;
  createdPostLikes?: Maybe<Array<UserLiked>>;
  createdPostVieweds?: Maybe<Array<UserViewed>>;
  createdPosts?: Maybe<Array<Post>>;
  createdQuestions?: Maybe<Array<Question>>;
  createdRoles?: Maybe<Array<Role>>;
  createdTags?: Maybe<Array<Tag>>;
  createdTopics?: Maybe<Array<Topic>>;
  createdUserVotes?: Maybe<Array<UserVote>>;
  createdUsers?: Maybe<Array<User>>;
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  feedbacks?: Maybe<Array<Feedback>>;
  feelingIcon?: Maybe<Scalars['String']['output']>;
  feelingStatus?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  fullNameUnAccent?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  ideas?: Maybe<Array<Idea>>;
  isAdmin: Scalars['Boolean']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  notificationss?: Maybe<Array<Notification>>;
  originalId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  postVieweds?: Maybe<Array<UserViewed>>;
  posts?: Maybe<Array<Post>>;
  resolvedQuestions?: Maybe<Array<Question>>;
  status: ActiveStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedAwards?: Maybe<Array<Award>>;
  updatedBannerGroups?: Maybe<Array<BannerGroup>>;
  updatedBanners?: Maybe<Array<Banner>>;
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  updatedComments?: Maybe<Array<Comment>>;
  updatedDepartments?: Maybe<Array<Department>>;
  updatedEvents?: Maybe<Array<Event>>;
  updatedFeedbacks?: Maybe<Array<Feedback>>;
  updatedIdeas?: Maybe<Array<Idea>>;
  updatedIndustries?: Maybe<Array<Industry>>;
  updatedNotifications?: Maybe<Array<Notification>>;
  updatedPostLikes?: Maybe<Array<UserLiked>>;
  updatedPostVieweds?: Maybe<Array<UserViewed>>;
  updatedPosts?: Maybe<Array<Post>>;
  updatedQuestions?: Maybe<Array<Question>>;
  updatedRoles?: Maybe<Array<Role>>;
  updatedTags?: Maybe<Array<Tag>>;
  updatedTopics?: Maybe<Array<Topic>>;
  updatedUserVotes?: Maybe<Array<UserVote>>;
  updatedUsers?: Maybe<Array<User>>;
  userApprovers?: Maybe<Array<UserApprover>>;
  userAwards?: Maybe<Array<UserAward>>;
  userDepartments?: Maybe<Array<UserDepartment>>;
  userIndustries?: Maybe<Array<UserIndustry>>;
  userLikeds?: Maybe<Array<UserLiked>>;
  userSearchHistories?: Maybe<Array<UserSearchHistory>>;
  userVotes?: Maybe<Array<UserVote>>;
};

export type UserApprover = {
  __typename?: 'UserApprover';
  id: Scalars['ID']['output'];
  status: ActiveStatus;
  type: TargetType;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserApproverConnection = {
  __typename?: 'UserApproverConnection';
  edges?: Maybe<Array<UserApproverEdge>>;
  nodes?: Maybe<Array<UserApprover>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserApproverCreateInput = {
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TargetType>;
  user: UserCreateNestedOneWithoutUserApproversInput;
};

export type UserApproverCreateManyInput = {
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TargetType>;
  userId: Scalars['String']['input'];
};

export type UserApproverCreateManyUserInput = {
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TargetType>;
};

export type UserApproverCreateManyUserInputEnvelope = {
  data: Array<UserApproverCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserApproverCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserApproverWhereUniqueInput>>;
};

export type UserApproverCreateOrConnectWithoutUserInput = {
  create: UserApproverCreateWithoutUserInput;
  where: UserApproverWhereUniqueInput;
};

export type UserApproverCreateWithoutUserInput = {
  status?: InputMaybe<ActiveStatus>;
  type?: InputMaybe<TargetType>;
};

export type UserApproverEdge = {
  __typename?: 'UserApproverEdge';
  cursor: Scalars['String']['output'];
  node: UserApprover;
};

export type UserApproverListRelationFilter = {
  every?: InputMaybe<UserApproverWhereInput>;
  none?: InputMaybe<UserApproverWhereInput>;
  some?: InputMaybe<UserApproverWhereInput>;
};

export type UserApproverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserApproverOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserApproverScalarFieldEnum {
  Id = 'id',
  Status = 'status',
  Type = 'type',
  UserId = 'userId'
}

export type UserApproverScalarWhereInput = {
  AND?: InputMaybe<Array<UserApproverScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserApproverScalarWhereInput>>;
  OR?: InputMaybe<Array<UserApproverScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  type?: InputMaybe<EnumTargetTypeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserApproverUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTargetTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserApproversNestedInput>;
};

export type UserApproverUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTargetTypeFieldUpdateOperationsInput>;
};

export type UserApproverUpdateManyWithWhereWithoutUserInput = {
  data: UserApproverUpdateManyMutationInput;
  where: UserApproverScalarWhereInput;
};

export type UserApproverUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserApproverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserApproverCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserApproverCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserApproverCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserApproverWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserApproverScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserApproverWhereUniqueInput>>;
  set?: InputMaybe<Array<UserApproverWhereUniqueInput>>;
  update?: InputMaybe<Array<UserApproverUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserApproverUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserApproverUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserApproverUpdateWithWhereUniqueWithoutUserInput = {
  data: UserApproverUpdateWithoutUserInput;
  where: UserApproverWhereUniqueInput;
};

export type UserApproverUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTargetTypeFieldUpdateOperationsInput>;
};

export type UserApproverUpsertWithWhereUniqueWithoutUserInput = {
  create: UserApproverCreateWithoutUserInput;
  update: UserApproverUpdateWithoutUserInput;
  where: UserApproverWhereUniqueInput;
};

export type UserApproverWhereInput = {
  AND?: InputMaybe<Array<UserApproverWhereInput>>;
  NOT?: InputMaybe<Array<UserApproverWhereInput>>;
  OR?: InputMaybe<Array<UserApproverWhereInput>>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  type?: InputMaybe<EnumTargetTypeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserApproverWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserAward = {
  __typename?: 'UserAward';
  award: Award;
  awardId: Scalars['String']['output'];
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  priority: Scalars['Int']['output'];
  status: PublishStatus;
  title: Scalars['String']['output'];
  urlImage?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserAwardConnection = {
  __typename?: 'UserAwardConnection';
  edges?: Maybe<Array<UserAwardEdge>>;
  nodes?: Maybe<Array<UserAward>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserAwardCreateInput = {
  award: AwardCreateNestedOneWithoutUserAwardsInput;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUserAwardInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserAwardsInput;
};

export type UserAwardCreateManyAwardInput = {
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type UserAwardCreateManyAwardInputEnvelope = {
  data: Array<UserAwardCreateManyAwardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAwardCreateManyDepartmentInput = {
  awardId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type UserAwardCreateManyDepartmentInputEnvelope = {
  data: Array<UserAwardCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAwardCreateManyUserInput = {
  awardId: Scalars['String']['input'];
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
};

export type UserAwardCreateManyUserInputEnvelope = {
  data: Array<UserAwardCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAwardCreateNestedManyWithoutAwardInput = {
  connect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
};

export type UserAwardCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
};

export type UserAwardCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
};

export type UserAwardCreateOrConnectWithoutAwardInput = {
  create: UserAwardCreateWithoutAwardInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardCreateOrConnectWithoutDepartmentInput = {
  create: UserAwardCreateWithoutDepartmentInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardCreateOrConnectWithoutUserInput = {
  create: UserAwardCreateWithoutUserInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardCreateWithoutAwardInput = {
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUserAwardInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserAwardsInput;
};

export type UserAwardCreateWithoutDepartmentInput = {
  award: AwardCreateNestedOneWithoutUserAwardsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserAwardsInput;
};

export type UserAwardCreateWithoutUserInput = {
  award: AwardCreateNestedOneWithoutUserAwardsInput;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUserAwardInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PublishStatus>;
  title: Scalars['String']['input'];
  urlImage?: InputMaybe<Scalars['String']['input']>;
};

export type UserAwardEdge = {
  __typename?: 'UserAwardEdge';
  cursor: Scalars['String']['output'];
  node: UserAward;
};

export type UserAwardListRelationFilter = {
  every?: InputMaybe<UserAwardWhereInput>;
  none?: InputMaybe<UserAwardWhereInput>;
  some?: InputMaybe<UserAwardWhereInput>;
};

export type UserAwardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserAwardOrderByWithRelationInput = {
  award?: InputMaybe<AwardOrderByWithRelationInput>;
  awardId?: InputMaybe<SortOrder>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  departmentId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  urlImage?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserAwardScalarFieldEnum {
  AwardId = 'awardId',
  DepartmentId = 'departmentId',
  Description = 'description',
  Id = 'id',
  Priority = 'priority',
  Status = 'status',
  Title = 'title',
  UrlImage = 'urlImage',
  UserId = 'userId'
}

export type UserAwardScalarWhereInput = {
  AND?: InputMaybe<Array<UserAwardScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserAwardScalarWhereInput>>;
  OR?: InputMaybe<Array<UserAwardScalarWhereInput>>;
  awardId?: InputMaybe<StringFilter>;
  departmentId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPublishStatusFilter>;
  title?: InputMaybe<StringFilter>;
  urlImage?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserAwardUpdateInput = {
  award?: InputMaybe<AwardUpdateOneRequiredWithoutUserAwardsNestedInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUserAwardNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPublishStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserAwardsNestedInput>;
};

export type UserAwardUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPublishStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserAwardUpdateManyWithWhereWithoutAwardInput = {
  data: UserAwardUpdateManyMutationInput;
  where: UserAwardScalarWhereInput;
};

export type UserAwardUpdateManyWithWhereWithoutDepartmentInput = {
  data: UserAwardUpdateManyMutationInput;
  where: UserAwardScalarWhereInput;
};

export type UserAwardUpdateManyWithWhereWithoutUserInput = {
  data: UserAwardUpdateManyMutationInput;
  where: UserAwardScalarWhereInput;
};

export type UserAwardUpdateManyWithoutAwardNestedInput = {
  connect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAwardCreateOrConnectWithoutAwardInput>>;
  create?: InputMaybe<Array<UserAwardCreateWithoutAwardInput>>;
  createMany?: InputMaybe<UserAwardCreateManyAwardInputEnvelope>;
  delete?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAwardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAwardUpdateWithWhereUniqueWithoutAwardInput>>;
  updateMany?: InputMaybe<Array<UserAwardUpdateManyWithWhereWithoutAwardInput>>;
  upsert?: InputMaybe<Array<UserAwardUpsertWithWhereUniqueWithoutAwardInput>>;
};

export type UserAwardUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAwardCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<UserAwardCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<UserAwardCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAwardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAwardUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<UserAwardUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<UserAwardUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type UserAwardUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAwardCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAwardCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAwardCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAwardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAwardWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAwardUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserAwardUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserAwardUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserAwardUpdateWithWhereUniqueWithoutAwardInput = {
  data: UserAwardUpdateWithoutAwardInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: UserAwardUpdateWithoutDepartmentInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardUpdateWithWhereUniqueWithoutUserInput = {
  data: UserAwardUpdateWithoutUserInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardUpdateWithoutAwardInput = {
  department?: InputMaybe<DepartmentUpdateOneWithoutUserAwardNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPublishStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserAwardsNestedInput>;
};

export type UserAwardUpdateWithoutDepartmentInput = {
  award?: InputMaybe<AwardUpdateOneRequiredWithoutUserAwardsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPublishStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserAwardsNestedInput>;
};

export type UserAwardUpdateWithoutUserInput = {
  award?: InputMaybe<AwardUpdateOneRequiredWithoutUserAwardsNestedInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUserAwardNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPublishStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  urlImage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserAwardUpsertWithWhereUniqueWithoutAwardInput = {
  create: UserAwardCreateWithoutAwardInput;
  update: UserAwardUpdateWithoutAwardInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: UserAwardCreateWithoutDepartmentInput;
  update: UserAwardUpdateWithoutDepartmentInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardUpsertWithWhereUniqueWithoutUserInput = {
  create: UserAwardCreateWithoutUserInput;
  update: UserAwardUpdateWithoutUserInput;
  where: UserAwardWhereUniqueInput;
};

export type UserAwardWhereInput = {
  AND?: InputMaybe<Array<UserAwardWhereInput>>;
  NOT?: InputMaybe<Array<UserAwardWhereInput>>;
  OR?: InputMaybe<Array<UserAwardWhereInput>>;
  award?: InputMaybe<AwardWhereInput>;
  awardId?: InputMaybe<StringFilter>;
  department?: InputMaybe<DepartmentWhereInput>;
  departmentId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumPublishStatusFilter>;
  title?: InputMaybe<StringFilter>;
  urlImage?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserAwardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<UserEdge>>;
  nodes?: Maybe<Array<User>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  approveQuestions: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  createdAwards: Scalars['Int']['output'];
  createdBannerGroups: Scalars['Int']['output'];
  createdBanners: Scalars['Int']['output'];
  createdComments: Scalars['Int']['output'];
  createdDepartments: Scalars['Int']['output'];
  createdEvents: Scalars['Int']['output'];
  createdFeedbacks: Scalars['Int']['output'];
  createdIdeas: Scalars['Int']['output'];
  createdIndustries: Scalars['Int']['output'];
  createdNotifications: Scalars['Int']['output'];
  createdPostLikes: Scalars['Int']['output'];
  createdPostVieweds: Scalars['Int']['output'];
  createdPosts: Scalars['Int']['output'];
  createdQuestions: Scalars['Int']['output'];
  createdRoles: Scalars['Int']['output'];
  createdTags: Scalars['Int']['output'];
  createdTopics: Scalars['Int']['output'];
  createdUserVotes: Scalars['Int']['output'];
  createdUsers: Scalars['Int']['output'];
  feedbacks: Scalars['Int']['output'];
  ideas: Scalars['Int']['output'];
  notificationss: Scalars['Int']['output'];
  postVieweds: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  resolvedQuestions: Scalars['Int']['output'];
  updatedAwards: Scalars['Int']['output'];
  updatedBannerGroups: Scalars['Int']['output'];
  updatedBanners: Scalars['Int']['output'];
  updatedComments: Scalars['Int']['output'];
  updatedDepartments: Scalars['Int']['output'];
  updatedEvents: Scalars['Int']['output'];
  updatedFeedbacks: Scalars['Int']['output'];
  updatedIdeas: Scalars['Int']['output'];
  updatedIndustries: Scalars['Int']['output'];
  updatedNotifications: Scalars['Int']['output'];
  updatedPostLikes: Scalars['Int']['output'];
  updatedPostVieweds: Scalars['Int']['output'];
  updatedPosts: Scalars['Int']['output'];
  updatedQuestions: Scalars['Int']['output'];
  updatedRoles: Scalars['Int']['output'];
  updatedTags: Scalars['Int']['output'];
  updatedTopics: Scalars['Int']['output'];
  updatedUserVotes: Scalars['Int']['output'];
  updatedUsers: Scalars['Int']['output'];
  userApprovers: Scalars['Int']['output'];
  userAwards: Scalars['Int']['output'];
  userDepartments: Scalars['Int']['output'];
  userIndustries: Scalars['Int']['output'];
  userLikeds: Scalars['Int']['output'];
  userSearchHistories: Scalars['Int']['output'];
  userVotes: Scalars['Int']['output'];
};

export type UserCreateManyCreatedByInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type UserCreateManyCreatedByInputEnvelope = {
  data: Array<UserCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyDepartmentInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type UserCreateManyDepartmentInputEnvelope = {
  data: Array<UserCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyUpdatedByInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ActiveStatus>;
};

export type UserCreateManyUpdatedByInputEnvelope = {
  data: Array<UserCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutApproveQuestionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutFeedbacksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutIdeasInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutNotificationssInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutPostViewedsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutResolvedQuestionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserApproversInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserAwardsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserDepartmentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserIndustriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserLikedsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserSearchHistoriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserVotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutApproveQuestionsInput = {
  create: UserCreateWithoutApproveQuestionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedByInput = {
  create: UserCreateWithoutCreatedByInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutDepartmentInput = {
  create: UserCreateWithoutDepartmentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFeedbacksInput = {
  create: UserCreateWithoutFeedbacksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIdeasInput = {
  create: UserCreateWithoutIdeasInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationssInput = {
  create: UserCreateWithoutNotificationssInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostViewedsInput = {
  create: UserCreateWithoutPostViewedsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutResolvedQuestionsInput = {
  create: UserCreateWithoutResolvedQuestionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedByInput = {
  create: UserCreateWithoutUpdatedByInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserApproversInput = {
  create: UserCreateWithoutUserApproversInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserAwardsInput = {
  create: UserCreateWithoutUserAwardsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserDepartmentsInput = {
  create: UserCreateWithoutUserDepartmentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserIndustriesInput = {
  create: UserCreateWithoutUserIndustriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserLikedsInput = {
  create: UserCreateWithoutUserLikedsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserSearchHistoriesInput = {
  create: UserCreateWithoutUserSearchHistoriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserVotesInput = {
  create: UserCreateWithoutUserVotesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutApproveQuestionsInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCommentsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCreatedByInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutDepartmentInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutFeedbacksInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutIdeasInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutNotificationssInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutPostViewedsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutPostsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutResolvedQuestionsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUpdatedByInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserApproversInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserAwardsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserDepartmentsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserIndustriesInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserLikedsInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserSearchHistoriesInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserVotesInput = {
  approveQuestions?: InputMaybe<QuestionCreateNestedManyWithoutApproveByInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  backgroundUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutOwnerInput>;
  createdAwards?: InputMaybe<AwardCreateNestedManyWithoutCreatedByInput>;
  createdBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutCreatedByInput>;
  createdBanners?: InputMaybe<BannerCreateNestedManyWithoutCreatedByInput>;
  createdComments?: InputMaybe<CommentCreateNestedManyWithoutCreatedByInput>;
  createdDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutCreatedByInput>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatedByInput>;
  createdFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutCreatedByInput>;
  createdIdeas?: InputMaybe<IdeaCreateNestedManyWithoutCreatedByInput>;
  createdIndustries?: InputMaybe<IndustryCreateNestedManyWithoutCreatedByInput>;
  createdNotifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  createdPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutCreatedByInput>;
  createdPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutCreatedByInput>;
  createdPosts?: InputMaybe<PostCreateNestedManyWithoutCreatedByInput>;
  createdQuestions?: InputMaybe<QuestionCreateNestedManyWithoutCreatedByInput>;
  createdRoles?: InputMaybe<RoleCreateNestedManyWithoutCreatedByInput>;
  createdTags?: InputMaybe<TagCreateNestedManyWithoutCreatedByInput>;
  createdTopics?: InputMaybe<TopicCreateNestedManyWithoutCreatedByInput>;
  createdUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutCreatedByInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatedByInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutUsersInput>;
  email: Scalars['String']['input'];
  feedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutApproveByInput>;
  feelingIcon?: InputMaybe<Scalars['String']['input']>;
  feelingStatus?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullNameUnAccent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  ideas?: InputMaybe<IdeaCreateNestedManyWithoutOwnerInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  notificationss?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  originalId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  postVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUserInput>;
  posts?: InputMaybe<PostCreateNestedManyWithoutApproveByInput>;
  resolvedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutResolvedByInput>;
  status?: InputMaybe<ActiveStatus>;
  updatedAwards?: InputMaybe<AwardCreateNestedManyWithoutUpdatedByInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupCreateNestedManyWithoutUpdatedByInput>;
  updatedBanners?: InputMaybe<BannerCreateNestedManyWithoutUpdatedByInput>;
  updatedComments?: InputMaybe<CommentCreateNestedManyWithoutUpdatedByInput>;
  updatedDepartments?: InputMaybe<DepartmentCreateNestedManyWithoutUpdatedByInput>;
  updatedEvents?: InputMaybe<EventCreateNestedManyWithoutUpdatedByInput>;
  updatedFeedbacks?: InputMaybe<FeedbackCreateNestedManyWithoutUpdatedByInput>;
  updatedIdeas?: InputMaybe<IdeaCreateNestedManyWithoutUpdatedByInput>;
  updatedIndustries?: InputMaybe<IndustryCreateNestedManyWithoutUpdatedByInput>;
  updatedNotifications?: InputMaybe<NotificationCreateNestedManyWithoutUpdatedByInput>;
  updatedPostLikes?: InputMaybe<UserLikedCreateNestedManyWithoutUpdatedByInput>;
  updatedPostVieweds?: InputMaybe<UserViewedCreateNestedManyWithoutUpdatedByInput>;
  updatedPosts?: InputMaybe<PostCreateNestedManyWithoutUpdatedByInput>;
  updatedQuestions?: InputMaybe<QuestionCreateNestedManyWithoutUpdatedByInput>;
  updatedRoles?: InputMaybe<RoleCreateNestedManyWithoutUpdatedByInput>;
  updatedTags?: InputMaybe<TagCreateNestedManyWithoutUpdatedByInput>;
  updatedTopics?: InputMaybe<TopicCreateNestedManyWithoutUpdatedByInput>;
  updatedUserVotes?: InputMaybe<UserVoteCreateNestedManyWithoutUpdatedByInput>;
  updatedUsers?: InputMaybe<UserCreateNestedManyWithoutUpdatedByInput>;
  userApprovers?: InputMaybe<UserApproverCreateNestedManyWithoutUserInput>;
  userAwards?: InputMaybe<UserAwardCreateNestedManyWithoutUserInput>;
  userDepartments?: InputMaybe<UserDepartmentCreateNestedManyWithoutUserInput>;
  userIndustries?: InputMaybe<UserIndustryCreateNestedManyWithoutUserInput>;
  userLikeds?: InputMaybe<UserLikedCreateNestedManyWithoutUserInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryCreateNestedManyWithoutUserInput>;
};

export type UserDepartment = {
  __typename?: 'UserDepartment';
  department: Department;
  departmentId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserDepartmentCreateManyDepartmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type UserDepartmentCreateManyDepartmentInputEnvelope = {
  data: Array<UserDepartmentCreateManyDepartmentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserDepartmentCreateManyUserInput = {
  departmentId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
};

export type UserDepartmentCreateManyUserInputEnvelope = {
  data: Array<UserDepartmentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserDepartmentCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
};

export type UserDepartmentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
};

export type UserDepartmentCreateOrConnectWithoutDepartmentInput = {
  create: UserDepartmentCreateWithoutDepartmentInput;
  where: UserDepartmentWhereUniqueInput;
};

export type UserDepartmentCreateOrConnectWithoutUserInput = {
  create: UserDepartmentCreateWithoutUserInput;
  where: UserDepartmentWhereUniqueInput;
};

export type UserDepartmentCreateWithoutDepartmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserDepartmentsInput;
};

export type UserDepartmentCreateWithoutUserInput = {
  department: DepartmentCreateNestedOneWithoutUserDepartmentsInput;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type UserDepartmentListRelationFilter = {
  every?: InputMaybe<UserDepartmentWhereInput>;
  none?: InputMaybe<UserDepartmentWhereInput>;
  some?: InputMaybe<UserDepartmentWhereInput>;
};

export type UserDepartmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserDepartmentScalarWhereInput = {
  AND?: InputMaybe<Array<UserDepartmentScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserDepartmentScalarWhereInput>>;
  OR?: InputMaybe<Array<UserDepartmentScalarWhereInput>>;
  departmentId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserDepartmentUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserDepartmentUpdateManyWithWhereWithoutDepartmentInput = {
  data: UserDepartmentUpdateManyMutationInput;
  where: UserDepartmentScalarWhereInput;
};

export type UserDepartmentUpdateManyWithWhereWithoutUserInput = {
  data: UserDepartmentUpdateManyMutationInput;
  where: UserDepartmentScalarWhereInput;
};

export type UserDepartmentUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserDepartmentCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<UserDepartmentCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<UserDepartmentCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserDepartmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  set?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  update?: InputMaybe<Array<UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<UserDepartmentUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type UserDepartmentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserDepartmentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserDepartmentCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserDepartmentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserDepartmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  set?: InputMaybe<Array<UserDepartmentWhereUniqueInput>>;
  update?: InputMaybe<Array<UserDepartmentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserDepartmentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserDepartmentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserDepartmentUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: UserDepartmentUpdateWithoutDepartmentInput;
  where: UserDepartmentWhereUniqueInput;
};

export type UserDepartmentUpdateWithWhereUniqueWithoutUserInput = {
  data: UserDepartmentUpdateWithoutUserInput;
  where: UserDepartmentWhereUniqueInput;
};

export type UserDepartmentUpdateWithoutDepartmentInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserDepartmentsNestedInput>;
};

export type UserDepartmentUpdateWithoutUserInput = {
  department?: InputMaybe<DepartmentUpdateOneRequiredWithoutUserDepartmentsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserDepartmentUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: UserDepartmentCreateWithoutDepartmentInput;
  update: UserDepartmentUpdateWithoutDepartmentInput;
  where: UserDepartmentWhereUniqueInput;
};

export type UserDepartmentUpsertWithWhereUniqueWithoutUserInput = {
  create: UserDepartmentCreateWithoutUserInput;
  update: UserDepartmentUpdateWithoutUserInput;
  where: UserDepartmentWhereUniqueInput;
};

export type UserDepartmentWhereInput = {
  AND?: InputMaybe<Array<UserDepartmentWhereInput>>;
  NOT?: InputMaybe<Array<UserDepartmentWhereInput>>;
  OR?: InputMaybe<Array<UserDepartmentWhereInput>>;
  department?: InputMaybe<DepartmentWhereInput>;
  departmentId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserDepartmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserIndustry = {
  __typename?: 'UserIndustry';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industry: Industry;
  industryId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserIndustryConnection = {
  __typename?: 'UserIndustryConnection';
  edges?: Maybe<Array<UserIndustryEdge>>;
  nodes?: Maybe<Array<UserIndustry>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserIndustryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  industry: IndustryCreateNestedOneWithoutUserIndustriesInput;
  user: UserCreateNestedOneWithoutUserIndustriesInput;
};

export type UserIndustryCreateManyIndustryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type UserIndustryCreateManyIndustryInputEnvelope = {
  data: Array<UserIndustryCreateManyIndustryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserIndustryCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserIndustryCreateManyUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
};

export type UserIndustryCreateManyUserInputEnvelope = {
  data: Array<UserIndustryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserIndustryCreateNestedManyWithoutIndustryInput = {
  connect?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
};

export type UserIndustryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
};

export type UserIndustryCreateOrConnectWithoutIndustryInput = {
  create: UserIndustryCreateWithoutIndustryInput;
  where: UserIndustryWhereUniqueInput;
};

export type UserIndustryCreateOrConnectWithoutUserInput = {
  create: UserIndustryCreateWithoutUserInput;
  where: UserIndustryWhereUniqueInput;
};

export type UserIndustryCreateWithoutIndustryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserIndustriesInput;
};

export type UserIndustryCreateWithoutUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  industry: IndustryCreateNestedOneWithoutUserIndustriesInput;
};

export type UserIndustryEdge = {
  __typename?: 'UserIndustryEdge';
  cursor: Scalars['String']['output'];
  node: UserIndustry;
};

export type UserIndustryListRelationFilter = {
  every?: InputMaybe<UserIndustryWhereInput>;
  none?: InputMaybe<UserIndustryWhereInput>;
  some?: InputMaybe<UserIndustryWhereInput>;
};

export type UserIndustryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserIndustryOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<IndustryOrderByWithRelationInput>;
  industryId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserIndustryScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  IndustryId = 'industryId',
  UserId = 'userId'
}

export type UserIndustryScalarWhereInput = {
  AND?: InputMaybe<Array<UserIndustryScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserIndustryScalarWhereInput>>;
  OR?: InputMaybe<Array<UserIndustryScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  industryId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserIndustryUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutUserIndustriesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserIndustriesNestedInput>;
};

export type UserIndustryUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserIndustryUpdateManyWithWhereWithoutIndustryInput = {
  data: UserIndustryUpdateManyMutationInput;
  where: UserIndustryScalarWhereInput;
};

export type UserIndustryUpdateManyWithWhereWithoutUserInput = {
  data: UserIndustryUpdateManyMutationInput;
  where: UserIndustryScalarWhereInput;
};

export type UserIndustryUpdateManyWithoutIndustryNestedInput = {
  connect?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserIndustryCreateOrConnectWithoutIndustryInput>>;
  create?: InputMaybe<Array<UserIndustryCreateWithoutIndustryInput>>;
  createMany?: InputMaybe<UserIndustryCreateManyIndustryInputEnvelope>;
  delete?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserIndustryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  update?: InputMaybe<Array<UserIndustryUpdateWithWhereUniqueWithoutIndustryInput>>;
  updateMany?: InputMaybe<Array<UserIndustryUpdateManyWithWhereWithoutIndustryInput>>;
  upsert?: InputMaybe<Array<UserIndustryUpsertWithWhereUniqueWithoutIndustryInput>>;
};

export type UserIndustryUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserIndustryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserIndustryCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserIndustryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserIndustryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserIndustryWhereUniqueInput>>;
  update?: InputMaybe<Array<UserIndustryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserIndustryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserIndustryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserIndustryUpdateWithWhereUniqueWithoutIndustryInput = {
  data: UserIndustryUpdateWithoutIndustryInput;
  where: UserIndustryWhereUniqueInput;
};

export type UserIndustryUpdateWithWhereUniqueWithoutUserInput = {
  data: UserIndustryUpdateWithoutUserInput;
  where: UserIndustryWhereUniqueInput;
};

export type UserIndustryUpdateWithoutIndustryInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserIndustriesNestedInput>;
};

export type UserIndustryUpdateWithoutUserInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  industry?: InputMaybe<IndustryUpdateOneRequiredWithoutUserIndustriesNestedInput>;
};

export type UserIndustryUpsertWithWhereUniqueWithoutIndustryInput = {
  create: UserIndustryCreateWithoutIndustryInput;
  update: UserIndustryUpdateWithoutIndustryInput;
  where: UserIndustryWhereUniqueInput;
};

export type UserIndustryUpsertWithWhereUniqueWithoutUserInput = {
  create: UserIndustryCreateWithoutUserInput;
  update: UserIndustryUpdateWithoutUserInput;
  where: UserIndustryWhereUniqueInput;
};

export type UserIndustryWhereInput = {
  AND?: InputMaybe<Array<UserIndustryWhereInput>>;
  NOT?: InputMaybe<Array<UserIndustryWhereInput>>;
  OR?: InputMaybe<Array<UserIndustryWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  industry?: InputMaybe<IndustryWhereInput>;
  industryId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserIndustryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserLiked = {
  __typename?: 'UserLiked';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserLikedConnection = {
  __typename?: 'UserLikedConnection';
  edges?: Maybe<Array<UserLikedEdge>>;
  nodes?: Maybe<Array<UserLiked>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserLikedCreateManyCreatedByInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserLikedCreateManyCreatedByInputEnvelope = {
  data: Array<UserLikedCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserLikedCreateManyPostInput = {
  userId: Scalars['String']['input'];
};

export type UserLikedCreateManyPostInputEnvelope = {
  data: Array<UserLikedCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserLikedCreateManyUpdatedByInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserLikedCreateManyUpdatedByInputEnvelope = {
  data: Array<UserLikedCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserLikedCreateManyUserInput = {
  postId: Scalars['String']['input'];
};

export type UserLikedCreateManyUserInputEnvelope = {
  data: Array<UserLikedCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserLikedCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
};

export type UserLikedCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
};

export type UserLikedCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
};

export type UserLikedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
};

export type UserLikedCreateOrConnectWithoutCreatedByInput = {
  create: UserLikedCreateWithoutCreatedByInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedCreateOrConnectWithoutPostInput = {
  create: UserLikedCreateWithoutPostInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedCreateOrConnectWithoutUpdatedByInput = {
  create: UserLikedCreateWithoutUpdatedByInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedCreateOrConnectWithoutUserInput = {
  create: UserLikedCreateWithoutUserInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedCreateWithoutCreatedByInput = {
  post: PostCreateNestedOneWithoutUserLikedsInput;
  user: UserCreateNestedOneWithoutUserLikedsInput;
};

export type UserLikedCreateWithoutPostInput = {
  user: UserCreateNestedOneWithoutUserLikedsInput;
};

export type UserLikedCreateWithoutUpdatedByInput = {
  post: PostCreateNestedOneWithoutUserLikedsInput;
  user: UserCreateNestedOneWithoutUserLikedsInput;
};

export type UserLikedCreateWithoutUserInput = {
  post: PostCreateNestedOneWithoutUserLikedsInput;
};

export type UserLikedEdge = {
  __typename?: 'UserLikedEdge';
  cursor: Scalars['String']['output'];
  node: UserLiked;
};

export type UserLikedListRelationFilter = {
  every?: InputMaybe<UserLikedWhereInput>;
  none?: InputMaybe<UserLikedWhereInput>;
  some?: InputMaybe<UserLikedWhereInput>;
};

export type UserLikedOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserLikedOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserLikedScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById',
  UserId = 'userId'
}

export type UserLikedScalarWhereInput = {
  AND?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  OR?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserLikedUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserLikedUpdateManyWithWhereWithoutCreatedByInput = {
  data: UserLikedUpdateManyMutationInput;
  where: UserLikedScalarWhereInput;
};

export type UserLikedUpdateManyWithWhereWithoutPostInput = {
  data: UserLikedUpdateManyMutationInput;
  where: UserLikedScalarWhereInput;
};

export type UserLikedUpdateManyWithWhereWithoutUpdatedByInput = {
  data: UserLikedUpdateManyMutationInput;
  where: UserLikedScalarWhereInput;
};

export type UserLikedUpdateManyWithWhereWithoutUserInput = {
  data: UserLikedUpdateManyMutationInput;
  where: UserLikedScalarWhereInput;
};

export type UserLikedUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserLikedCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<UserLikedCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<UserLikedCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserLikedUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<UserLikedUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<UserLikedUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type UserLikedUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserLikedCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<UserLikedCreateWithoutPostInput>>;
  createMany?: InputMaybe<UserLikedCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserLikedUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<UserLikedUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<UserLikedUpsertWithWhereUniqueWithoutPostInput>>;
};

export type UserLikedUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserLikedCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<UserLikedCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<UserLikedCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserLikedUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<UserLikedUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<UserLikedUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type UserLikedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserLikedCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserLikedCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserLikedCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserLikedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserLikedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserLikedUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserLikedUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserLikedUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserLikedUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: UserLikedUpdateWithoutCreatedByInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpdateWithWhereUniqueWithoutPostInput = {
  data: UserLikedUpdateWithoutPostInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: UserLikedUpdateWithoutUpdatedByInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpdateWithWhereUniqueWithoutUserInput = {
  data: UserLikedUpdateWithoutUserInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpdateWithoutCreatedByInput = {
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserLikedsNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserLikedsNestedInput>;
};

export type UserLikedUpdateWithoutPostInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserLikedsNestedInput>;
};

export type UserLikedUpdateWithoutUpdatedByInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserLikedsNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserLikedsNestedInput>;
};

export type UserLikedUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserLikedsNestedInput>;
};

export type UserLikedUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: UserLikedCreateWithoutCreatedByInput;
  update: UserLikedUpdateWithoutCreatedByInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpsertWithWhereUniqueWithoutPostInput = {
  create: UserLikedCreateWithoutPostInput;
  update: UserLikedUpdateWithoutPostInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: UserLikedCreateWithoutUpdatedByInput;
  update: UserLikedUpdateWithoutUpdatedByInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedUpsertWithWhereUniqueWithoutUserInput = {
  create: UserLikedCreateWithoutUserInput;
  update: UserLikedUpdateWithoutUserInput;
  where: UserLikedWhereUniqueInput;
};

export type UserLikedWhereInput = {
  AND?: InputMaybe<Array<UserLikedWhereInput>>;
  NOT?: InputMaybe<Array<UserLikedWhereInput>>;
  OR?: InputMaybe<Array<UserLikedWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserLikedWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserLikedWhereUniqueWithRelationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  approveQuestions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  backgroundUrl?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdAwards?: InputMaybe<AwardOrderByRelationAggregateInput>;
  createdBannerGroups?: InputMaybe<BannerGroupOrderByRelationAggregateInput>;
  createdBanners?: InputMaybe<BannerOrderByRelationAggregateInput>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  createdComments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdDepartments?: InputMaybe<DepartmentOrderByRelationAggregateInput>;
  createdEvents?: InputMaybe<EventOrderByRelationAggregateInput>;
  createdFeedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  createdIdeas?: InputMaybe<IdeaOrderByRelationAggregateInput>;
  createdIndustries?: InputMaybe<IndustryOrderByRelationAggregateInput>;
  createdNotifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  createdPostLikes?: InputMaybe<UserLikedOrderByRelationAggregateInput>;
  createdPostVieweds?: InputMaybe<UserViewedOrderByRelationAggregateInput>;
  createdPosts?: InputMaybe<PostOrderByRelationAggregateInput>;
  createdQuestions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  createdRoles?: InputMaybe<RoleOrderByRelationAggregateInput>;
  createdTags?: InputMaybe<TagOrderByRelationAggregateInput>;
  createdTopics?: InputMaybe<TopicOrderByRelationAggregateInput>;
  createdUserVotes?: InputMaybe<UserVoteOrderByRelationAggregateInput>;
  createdUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  dateOfBirth?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  departmentId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  feelingIcon?: InputMaybe<SortOrder>;
  feelingStatus?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  fullNameUnAccent?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ideas?: InputMaybe<IdeaOrderByRelationAggregateInput>;
  isAdmin?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  notificationss?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  originalId?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  postVieweds?: InputMaybe<UserViewedOrderByRelationAggregateInput>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  resolvedQuestions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedAwards?: InputMaybe<AwardOrderByRelationAggregateInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupOrderByRelationAggregateInput>;
  updatedBanners?: InputMaybe<BannerOrderByRelationAggregateInput>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  updatedComments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  updatedDepartments?: InputMaybe<DepartmentOrderByRelationAggregateInput>;
  updatedEvents?: InputMaybe<EventOrderByRelationAggregateInput>;
  updatedFeedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  updatedIdeas?: InputMaybe<IdeaOrderByRelationAggregateInput>;
  updatedIndustries?: InputMaybe<IndustryOrderByRelationAggregateInput>;
  updatedNotifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  updatedPostLikes?: InputMaybe<UserLikedOrderByRelationAggregateInput>;
  updatedPostVieweds?: InputMaybe<UserViewedOrderByRelationAggregateInput>;
  updatedPosts?: InputMaybe<PostOrderByRelationAggregateInput>;
  updatedQuestions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  updatedRoles?: InputMaybe<RoleOrderByRelationAggregateInput>;
  updatedTags?: InputMaybe<TagOrderByRelationAggregateInput>;
  updatedTopics?: InputMaybe<TopicOrderByRelationAggregateInput>;
  updatedUserVotes?: InputMaybe<UserVoteOrderByRelationAggregateInput>;
  updatedUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  userApprovers?: InputMaybe<UserApproverOrderByRelationAggregateInput>;
  userAwards?: InputMaybe<UserAwardOrderByRelationAggregateInput>;
  userDepartments?: InputMaybe<UserDepartmentOrderByRelationAggregateInput>;
  userIndustries?: InputMaybe<UserIndustryOrderByRelationAggregateInput>;
  userLikeds?: InputMaybe<UserLikedOrderByRelationAggregateInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryOrderByRelationAggregateInput>;
  userVotes?: InputMaybe<UserVoteOrderByRelationAggregateInput>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  BackgroundUrl = 'backgroundUrl',
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DateOfBirth = 'dateOfBirth',
  DeletedAt = 'deletedAt',
  DepartmentId = 'departmentId',
  Email = 'email',
  FeelingIcon = 'feelingIcon',
  FeelingStatus = 'feelingStatus',
  FullName = 'fullName',
  FullNameUnAccent = 'fullNameUnAccent',
  Gender = 'gender',
  Id = 'id',
  IsAdmin = 'isAdmin',
  JobTitle = 'jobTitle',
  OriginalId = 'originalId',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  backgroundUrl?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  departmentId?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  feelingIcon?: InputMaybe<StringNullableFilter>;
  feelingStatus?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringNullableFilter>;
  fullNameUnAccent?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  jobTitle?: InputMaybe<StringNullableFilter>;
  originalId?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
};

export type UserSearchHistory = {
  __typename?: 'UserSearchHistory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  keyword: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserSearchHistoryConnection = {
  __typename?: 'UserSearchHistoryConnection';
  edges?: Maybe<Array<UserSearchHistoryEdge>>;
  nodes?: Maybe<Array<UserSearchHistory>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserSearchHistoryCreateInput = {
  keyword: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutUserSearchHistoriesInput;
};

export type UserSearchHistoryCreateManyInput = {
  keyword: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserSearchHistoryCreateManyUserInput = {
  keyword: Scalars['String']['input'];
};

export type UserSearchHistoryCreateManyUserInputEnvelope = {
  data: Array<UserSearchHistoryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserSearchHistoryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserSearchHistoryWhereUniqueInput>>;
};

export type UserSearchHistoryCreateOrConnectWithoutUserInput = {
  create: UserSearchHistoryCreateWithoutUserInput;
  where: UserSearchHistoryWhereUniqueInput;
};

export type UserSearchHistoryCreateWithoutUserInput = {
  keyword: Scalars['String']['input'];
};

export type UserSearchHistoryEdge = {
  __typename?: 'UserSearchHistoryEdge';
  cursor: Scalars['String']['output'];
  node: UserSearchHistory;
};

export type UserSearchHistoryListRelationFilter = {
  every?: InputMaybe<UserSearchHistoryWhereInput>;
  none?: InputMaybe<UserSearchHistoryWhereInput>;
  some?: InputMaybe<UserSearchHistoryWhereInput>;
};

export type UserSearchHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserSearchHistoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keyword?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserSearchHistoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Keyword = 'keyword',
  UserId = 'userId'
}

export type UserSearchHistoryScalarWhereInput = {
  AND?: InputMaybe<Array<UserSearchHistoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserSearchHistoryScalarWhereInput>>;
  OR?: InputMaybe<Array<UserSearchHistoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  keyword?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserSearchHistoryUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keyword?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserSearchHistoriesNestedInput>;
};

export type UserSearchHistoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keyword?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserSearchHistoryUpdateManyWithWhereWithoutUserInput = {
  data: UserSearchHistoryUpdateManyMutationInput;
  where: UserSearchHistoryScalarWhereInput;
};

export type UserSearchHistoryUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserSearchHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserSearchHistoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserSearchHistoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSearchHistoryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserSearchHistoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserSearchHistoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserSearchHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSearchHistoryWhereUniqueInput>>;
  update?: InputMaybe<Array<UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserSearchHistoryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput = {
  data: UserSearchHistoryUpdateWithoutUserInput;
  where: UserSearchHistoryWhereUniqueInput;
};

export type UserSearchHistoryUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keyword?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput = {
  create: UserSearchHistoryCreateWithoutUserInput;
  update: UserSearchHistoryUpdateWithoutUserInput;
  where: UserSearchHistoryWhereUniqueInput;
};

export type UserSearchHistoryWhereInput = {
  AND?: InputMaybe<Array<UserSearchHistoryWhereInput>>;
  NOT?: InputMaybe<Array<UserSearchHistoryWhereInput>>;
  OR?: InputMaybe<Array<UserSearchHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  keyword?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserSearchHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserStatusCounts = {
  __typename?: 'UserStatusCounts';
  Confident: StatusCount;
  Happy: StatusCount;
  Sad: StatusCount;
  Stress: StatusCount;
  Thoughtful: StatusCount;
};

export type UserUpdateManyMutationInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutCreatedByInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutDepartmentInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutUpdatedByInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<UserCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type UserUpdateManyWithoutDepartmentNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<UserCreateWithoutDepartmentInput>>;
  createMany?: InputMaybe<UserCreateManyDepartmentInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type UserUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<UserCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutNotificationssNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationssInput>;
  create?: InputMaybe<UserCreateWithoutNotificationssInput>;
  update?: InputMaybe<UserUpdateWithoutNotificationssInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationssInput>;
};

export type UserUpdateOneRequiredWithoutPostViewedsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostViewedsInput>;
  create?: InputMaybe<UserCreateWithoutPostViewedsInput>;
  update?: InputMaybe<UserUpdateWithoutPostViewedsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostViewedsInput>;
};

export type UserUpdateOneRequiredWithoutUserApproversNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserApproversInput>;
  create?: InputMaybe<UserCreateWithoutUserApproversInput>;
  update?: InputMaybe<UserUpdateWithoutUserApproversInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserApproversInput>;
};

export type UserUpdateOneRequiredWithoutUserAwardsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserAwardsInput>;
  create?: InputMaybe<UserCreateWithoutUserAwardsInput>;
  update?: InputMaybe<UserUpdateWithoutUserAwardsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserAwardsInput>;
};

export type UserUpdateOneRequiredWithoutUserDepartmentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserDepartmentsInput>;
  create?: InputMaybe<UserCreateWithoutUserDepartmentsInput>;
  update?: InputMaybe<UserUpdateWithoutUserDepartmentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserDepartmentsInput>;
};

export type UserUpdateOneRequiredWithoutUserIndustriesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserIndustriesInput>;
  create?: InputMaybe<UserCreateWithoutUserIndustriesInput>;
  update?: InputMaybe<UserUpdateWithoutUserIndustriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserIndustriesInput>;
};

export type UserUpdateOneRequiredWithoutUserLikedsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserLikedsInput>;
  create?: InputMaybe<UserCreateWithoutUserLikedsInput>;
  update?: InputMaybe<UserUpdateWithoutUserLikedsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserLikedsInput>;
};

export type UserUpdateOneRequiredWithoutUserSearchHistoriesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserSearchHistoriesInput>;
  create?: InputMaybe<UserCreateWithoutUserSearchHistoriesInput>;
  update?: InputMaybe<UserUpdateWithoutUserSearchHistoriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserSearchHistoriesInput>;
};

export type UserUpdateOneRequiredWithoutUserVotesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserVotesInput>;
  create?: InputMaybe<UserCreateWithoutUserVotesInput>;
  update?: InputMaybe<UserUpdateWithoutUserVotesInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserVotesInput>;
};

export type UserUpdateOneWithoutApproveQuestionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApproveQuestionsInput>;
  create?: InputMaybe<UserCreateWithoutApproveQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutApproveQuestionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutApproveQuestionsInput>;
};

export type UserUpdateOneWithoutFeedbacksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFeedbacksInput>;
  create?: InputMaybe<UserCreateWithoutFeedbacksInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutFeedbacksInput>;
  upsert?: InputMaybe<UserUpsertWithoutFeedbacksInput>;
};

export type UserUpdateOneWithoutIdeasNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutIdeasInput>;
  create?: InputMaybe<UserCreateWithoutIdeasInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutIdeasInput>;
  upsert?: InputMaybe<UserUpsertWithoutIdeasInput>;
};

export type UserUpdateOneWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateOneWithoutResolvedQuestionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResolvedQuestionsInput>;
  create?: InputMaybe<UserCreateWithoutResolvedQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutResolvedQuestionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutResolvedQuestionsInput>;
};

export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: UserUpdateWithoutCreatedByInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: UserUpdateWithoutDepartmentInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: UserUpdateWithoutUpdatedByInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutApproveQuestionsInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutCommentsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutCreatedByInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutDepartmentInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutFeedbacksInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutIdeasInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutNotificationssInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutPostViewedsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutPostsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutResolvedQuestionsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUpdatedByInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserApproversInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserAwardsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserDepartmentsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserIndustriesInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserLikedsInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserSearchHistoriesInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userVotes?: InputMaybe<UserVoteUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserVotesInput = {
  approveQuestions?: InputMaybe<QuestionUpdateManyWithoutApproveByNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  backgroundUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutOwnerNestedInput>;
  createdAwards?: InputMaybe<AwardUpdateManyWithoutCreatedByNestedInput>;
  createdBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutCreatedByNestedInput>;
  createdBanners?: InputMaybe<BannerUpdateManyWithoutCreatedByNestedInput>;
  createdComments?: InputMaybe<CommentUpdateManyWithoutCreatedByNestedInput>;
  createdDepartments?: InputMaybe<DepartmentUpdateManyWithoutCreatedByNestedInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatedByNestedInput>;
  createdFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutCreatedByNestedInput>;
  createdIdeas?: InputMaybe<IdeaUpdateManyWithoutCreatedByNestedInput>;
  createdIndustries?: InputMaybe<IndustryUpdateManyWithoutCreatedByNestedInput>;
  createdNotifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByNestedInput>;
  createdPostLikes?: InputMaybe<UserLikedUpdateManyWithoutCreatedByNestedInput>;
  createdPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutCreatedByNestedInput>;
  createdPosts?: InputMaybe<PostUpdateManyWithoutCreatedByNestedInput>;
  createdQuestions?: InputMaybe<QuestionUpdateManyWithoutCreatedByNestedInput>;
  createdRoles?: InputMaybe<RoleUpdateManyWithoutCreatedByNestedInput>;
  createdTags?: InputMaybe<TagUpdateManyWithoutCreatedByNestedInput>;
  createdTopics?: InputMaybe<TopicUpdateManyWithoutCreatedByNestedInput>;
  createdUserVotes?: InputMaybe<UserVoteUpdateManyWithoutCreatedByNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatedByNestedInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutUsersNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feedbacks?: InputMaybe<FeedbackUpdateManyWithoutApproveByNestedInput>;
  feelingIcon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feelingStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullNameUnAccent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ideas?: InputMaybe<IdeaUpdateManyWithoutOwnerNestedInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationss?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  originalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  position?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  postVieweds?: InputMaybe<UserViewedUpdateManyWithoutUserNestedInput>;
  posts?: InputMaybe<PostUpdateManyWithoutApproveByNestedInput>;
  resolvedQuestions?: InputMaybe<QuestionUpdateManyWithoutResolvedByNestedInput>;
  status?: InputMaybe<EnumActiveStatusFieldUpdateOperationsInput>;
  updatedAwards?: InputMaybe<AwardUpdateManyWithoutUpdatedByNestedInput>;
  updatedBannerGroups?: InputMaybe<BannerGroupUpdateManyWithoutUpdatedByNestedInput>;
  updatedBanners?: InputMaybe<BannerUpdateManyWithoutUpdatedByNestedInput>;
  updatedComments?: InputMaybe<CommentUpdateManyWithoutUpdatedByNestedInput>;
  updatedDepartments?: InputMaybe<DepartmentUpdateManyWithoutUpdatedByNestedInput>;
  updatedEvents?: InputMaybe<EventUpdateManyWithoutUpdatedByNestedInput>;
  updatedFeedbacks?: InputMaybe<FeedbackUpdateManyWithoutUpdatedByNestedInput>;
  updatedIdeas?: InputMaybe<IdeaUpdateManyWithoutUpdatedByNestedInput>;
  updatedIndustries?: InputMaybe<IndustryUpdateManyWithoutUpdatedByNestedInput>;
  updatedNotifications?: InputMaybe<NotificationUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostLikes?: InputMaybe<UserLikedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPostVieweds?: InputMaybe<UserViewedUpdateManyWithoutUpdatedByNestedInput>;
  updatedPosts?: InputMaybe<PostUpdateManyWithoutUpdatedByNestedInput>;
  updatedQuestions?: InputMaybe<QuestionUpdateManyWithoutUpdatedByNestedInput>;
  updatedRoles?: InputMaybe<RoleUpdateManyWithoutUpdatedByNestedInput>;
  updatedTags?: InputMaybe<TagUpdateManyWithoutUpdatedByNestedInput>;
  updatedTopics?: InputMaybe<TopicUpdateManyWithoutUpdatedByNestedInput>;
  updatedUserVotes?: InputMaybe<UserVoteUpdateManyWithoutUpdatedByNestedInput>;
  updatedUsers?: InputMaybe<UserUpdateManyWithoutUpdatedByNestedInput>;
  userApprovers?: InputMaybe<UserApproverUpdateManyWithoutUserNestedInput>;
  userAwards?: InputMaybe<UserAwardUpdateManyWithoutUserNestedInput>;
  userDepartments?: InputMaybe<UserDepartmentUpdateManyWithoutUserNestedInput>;
  userIndustries?: InputMaybe<UserIndustryUpdateManyWithoutUserNestedInput>;
  userLikeds?: InputMaybe<UserLikedUpdateManyWithoutUserNestedInput>;
  userSearchHistories?: InputMaybe<UserSearchHistoryUpdateManyWithoutUserNestedInput>;
};

export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: UserCreateWithoutCreatedByInput;
  update: UserUpdateWithoutCreatedByInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: UserCreateWithoutDepartmentInput;
  update: UserUpdateWithoutDepartmentInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: UserCreateWithoutUpdatedByInput;
  update: UserUpdateWithoutUpdatedByInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutApproveQuestionsInput = {
  create: UserCreateWithoutApproveQuestionsInput;
  update: UserUpdateWithoutApproveQuestionsInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutFeedbacksInput = {
  create: UserCreateWithoutFeedbacksInput;
  update: UserUpdateWithoutFeedbacksInput;
};

export type UserUpsertWithoutIdeasInput = {
  create: UserCreateWithoutIdeasInput;
  update: UserUpdateWithoutIdeasInput;
};

export type UserUpsertWithoutNotificationssInput = {
  create: UserCreateWithoutNotificationssInput;
  update: UserUpdateWithoutNotificationssInput;
};

export type UserUpsertWithoutPostViewedsInput = {
  create: UserCreateWithoutPostViewedsInput;
  update: UserUpdateWithoutPostViewedsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserUpsertWithoutResolvedQuestionsInput = {
  create: UserCreateWithoutResolvedQuestionsInput;
  update: UserUpdateWithoutResolvedQuestionsInput;
};

export type UserUpsertWithoutUserApproversInput = {
  create: UserCreateWithoutUserApproversInput;
  update: UserUpdateWithoutUserApproversInput;
};

export type UserUpsertWithoutUserAwardsInput = {
  create: UserCreateWithoutUserAwardsInput;
  update: UserUpdateWithoutUserAwardsInput;
};

export type UserUpsertWithoutUserDepartmentsInput = {
  create: UserCreateWithoutUserDepartmentsInput;
  update: UserUpdateWithoutUserDepartmentsInput;
};

export type UserUpsertWithoutUserIndustriesInput = {
  create: UserCreateWithoutUserIndustriesInput;
  update: UserUpdateWithoutUserIndustriesInput;
};

export type UserUpsertWithoutUserLikedsInput = {
  create: UserCreateWithoutUserLikedsInput;
  update: UserUpdateWithoutUserLikedsInput;
};

export type UserUpsertWithoutUserSearchHistoriesInput = {
  create: UserCreateWithoutUserSearchHistoriesInput;
  update: UserUpdateWithoutUserSearchHistoriesInput;
};

export type UserUpsertWithoutUserVotesInput = {
  create: UserCreateWithoutUserVotesInput;
  update: UserUpdateWithoutUserVotesInput;
};

export type UserViewed = {
  __typename?: 'UserViewed';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserViewedConnection = {
  __typename?: 'UserViewedConnection';
  edges?: Maybe<Array<UserViewedEdge>>;
  nodes?: Maybe<Array<UserViewed>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserViewedCreateManyCreatedByInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserViewedCreateManyCreatedByInputEnvelope = {
  data: Array<UserViewedCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserViewedCreateManyPostInput = {
  userId: Scalars['String']['input'];
};

export type UserViewedCreateManyPostInputEnvelope = {
  data: Array<UserViewedCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserViewedCreateManyUpdatedByInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserViewedCreateManyUpdatedByInputEnvelope = {
  data: Array<UserViewedCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserViewedCreateManyUserInput = {
  postId: Scalars['String']['input'];
};

export type UserViewedCreateManyUserInputEnvelope = {
  data: Array<UserViewedCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserViewedCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
};

export type UserViewedCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
};

export type UserViewedCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
};

export type UserViewedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
};

export type UserViewedCreateOrConnectWithoutCreatedByInput = {
  create: UserViewedCreateWithoutCreatedByInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedCreateOrConnectWithoutPostInput = {
  create: UserViewedCreateWithoutPostInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedCreateOrConnectWithoutUpdatedByInput = {
  create: UserViewedCreateWithoutUpdatedByInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedCreateOrConnectWithoutUserInput = {
  create: UserViewedCreateWithoutUserInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedCreateWithoutCreatedByInput = {
  post: PostCreateNestedOneWithoutUserViewedsInput;
  user: UserCreateNestedOneWithoutPostViewedsInput;
};

export type UserViewedCreateWithoutPostInput = {
  user: UserCreateNestedOneWithoutPostViewedsInput;
};

export type UserViewedCreateWithoutUpdatedByInput = {
  post: PostCreateNestedOneWithoutUserViewedsInput;
  user: UserCreateNestedOneWithoutPostViewedsInput;
};

export type UserViewedCreateWithoutUserInput = {
  post: PostCreateNestedOneWithoutUserViewedsInput;
};

export type UserViewedEdge = {
  __typename?: 'UserViewedEdge';
  cursor: Scalars['String']['output'];
  node: UserViewed;
};

export type UserViewedListRelationFilter = {
  every?: InputMaybe<UserViewedWhereInput>;
  none?: InputMaybe<UserViewedWhereInput>;
  some?: InputMaybe<UserViewedWhereInput>;
};

export type UserViewedOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserViewedOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserViewedScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById',
  UserId = 'userId'
}

export type UserViewedScalarWhereInput = {
  AND?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  OR?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserViewedUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserViewedUpdateManyWithWhereWithoutCreatedByInput = {
  data: UserViewedUpdateManyMutationInput;
  where: UserViewedScalarWhereInput;
};

export type UserViewedUpdateManyWithWhereWithoutPostInput = {
  data: UserViewedUpdateManyMutationInput;
  where: UserViewedScalarWhereInput;
};

export type UserViewedUpdateManyWithWhereWithoutUpdatedByInput = {
  data: UserViewedUpdateManyMutationInput;
  where: UserViewedScalarWhereInput;
};

export type UserViewedUpdateManyWithWhereWithoutUserInput = {
  data: UserViewedUpdateManyMutationInput;
  where: UserViewedScalarWhereInput;
};

export type UserViewedUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserViewedCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<UserViewedCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<UserViewedCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserViewedUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<UserViewedUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<UserViewedUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type UserViewedUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserViewedCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<UserViewedCreateWithoutPostInput>>;
  createMany?: InputMaybe<UserViewedCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserViewedUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<UserViewedUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<UserViewedUpsertWithWhereUniqueWithoutPostInput>>;
};

export type UserViewedUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserViewedCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<UserViewedCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<UserViewedCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserViewedUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<UserViewedUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<UserViewedUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type UserViewedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserViewedCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserViewedCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserViewedCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserViewedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  set?: InputMaybe<Array<UserViewedWhereUniqueInput>>;
  update?: InputMaybe<Array<UserViewedUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserViewedUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserViewedUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserViewedUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: UserViewedUpdateWithoutCreatedByInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpdateWithWhereUniqueWithoutPostInput = {
  data: UserViewedUpdateWithoutPostInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: UserViewedUpdateWithoutUpdatedByInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpdateWithWhereUniqueWithoutUserInput = {
  data: UserViewedUpdateWithoutUserInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpdateWithoutCreatedByInput = {
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserViewedsNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostViewedsNestedInput>;
};

export type UserViewedUpdateWithoutPostInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostViewedsNestedInput>;
};

export type UserViewedUpdateWithoutUpdatedByInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserViewedsNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostViewedsNestedInput>;
};

export type UserViewedUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserViewedsNestedInput>;
};

export type UserViewedUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: UserViewedCreateWithoutCreatedByInput;
  update: UserViewedUpdateWithoutCreatedByInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpsertWithWhereUniqueWithoutPostInput = {
  create: UserViewedCreateWithoutPostInput;
  update: UserViewedUpdateWithoutPostInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: UserViewedCreateWithoutUpdatedByInput;
  update: UserViewedUpdateWithoutUpdatedByInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedUpsertWithWhereUniqueWithoutUserInput = {
  create: UserViewedCreateWithoutUserInput;
  update: UserViewedUpdateWithoutUserInput;
  where: UserViewedWhereUniqueInput;
};

export type UserViewedWhereInput = {
  AND?: InputMaybe<Array<UserViewedWhereInput>>;
  NOT?: InputMaybe<Array<UserViewedWhereInput>>;
  OR?: InputMaybe<Array<UserViewedWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserViewedWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserVote = {
  __typename?: 'UserVote';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  idea: Idea;
  ideaId: Scalars['String']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  updatedById?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserVoteConnection = {
  __typename?: 'UserVoteConnection';
  edges?: Maybe<Array<UserVoteEdge>>;
  nodes?: Maybe<Array<UserVote>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserVoteCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutUserVotesInput;
  post: PostCreateNestedOneWithoutUserVotesInput;
  user: UserCreateNestedOneWithoutUserVotesInput;
};

export type UserVoteCreateManyCreatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserVoteCreateManyCreatedByInputEnvelope = {
  data: Array<UserVoteCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserVoteCreateManyIdeaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserVoteCreateManyIdeaInputEnvelope = {
  data: Array<UserVoteCreateManyIdeaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserVoteCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserVoteCreateManyPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserVoteCreateManyPostInputEnvelope = {
  data: Array<UserVoteCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserVoteCreateManyUpdatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserVoteCreateManyUpdatedByInputEnvelope = {
  data: Array<UserVoteCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserVoteCreateManyUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ideaId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type UserVoteCreateManyUserInputEnvelope = {
  data: Array<UserVoteCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserVoteCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
};

export type UserVoteCreateNestedManyWithoutIdeaInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
};

export type UserVoteCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
};

export type UserVoteCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
};

export type UserVoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
};

export type UserVoteCreateOrConnectWithoutCreatedByInput = {
  create: UserVoteCreateWithoutCreatedByInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteCreateOrConnectWithoutIdeaInput = {
  create: UserVoteCreateWithoutIdeaInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteCreateOrConnectWithoutPostInput = {
  create: UserVoteCreateWithoutPostInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteCreateOrConnectWithoutUpdatedByInput = {
  create: UserVoteCreateWithoutUpdatedByInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteCreateOrConnectWithoutUserInput = {
  create: UserVoteCreateWithoutUserInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteCreateWithoutCreatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutUserVotesInput;
  post: PostCreateNestedOneWithoutUserVotesInput;
  user: UserCreateNestedOneWithoutUserVotesInput;
};

export type UserVoteCreateWithoutIdeaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  post: PostCreateNestedOneWithoutUserVotesInput;
  user: UserCreateNestedOneWithoutUserVotesInput;
};

export type UserVoteCreateWithoutPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutUserVotesInput;
  user: UserCreateNestedOneWithoutUserVotesInput;
};

export type UserVoteCreateWithoutUpdatedByInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutUserVotesInput;
  post: PostCreateNestedOneWithoutUserVotesInput;
  user: UserCreateNestedOneWithoutUserVotesInput;
};

export type UserVoteCreateWithoutUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idea: IdeaCreateNestedOneWithoutUserVotesInput;
  post: PostCreateNestedOneWithoutUserVotesInput;
};

export type UserVoteEdge = {
  __typename?: 'UserVoteEdge';
  cursor: Scalars['String']['output'];
  node: UserVote;
};

export type UserVoteListRelationFilter = {
  every?: InputMaybe<UserVoteWhereInput>;
  none?: InputMaybe<UserVoteWhereInput>;
  some?: InputMaybe<UserVoteWhereInput>;
};

export type UserVoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserVoteOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  idea?: InputMaybe<IdeaOrderByWithRelationInput>;
  ideaId?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<UserOrderByWithRelationInput>;
  updatedById?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserVoteScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  IdeaId = 'ideaId',
  PostId = 'postId',
  UpdatedAt = 'updatedAt',
  UpdatedById = 'updatedById',
  UserId = 'userId'
}

export type UserVoteScalarWhereInput = {
  AND?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  OR?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ideaId?: InputMaybe<StringFilter>;
  postId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserVoteUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutUserVotesNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserVotesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserVotesNestedInput>;
};

export type UserVoteUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserVoteUpdateManyWithWhereWithoutCreatedByInput = {
  data: UserVoteUpdateManyMutationInput;
  where: UserVoteScalarWhereInput;
};

export type UserVoteUpdateManyWithWhereWithoutIdeaInput = {
  data: UserVoteUpdateManyMutationInput;
  where: UserVoteScalarWhereInput;
};

export type UserVoteUpdateManyWithWhereWithoutPostInput = {
  data: UserVoteUpdateManyMutationInput;
  where: UserVoteScalarWhereInput;
};

export type UserVoteUpdateManyWithWhereWithoutUpdatedByInput = {
  data: UserVoteUpdateManyMutationInput;
  where: UserVoteScalarWhereInput;
};

export type UserVoteUpdateManyWithWhereWithoutUserInput = {
  data: UserVoteUpdateManyMutationInput;
  where: UserVoteScalarWhereInput;
};

export type UserVoteUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserVoteCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<UserVoteCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<UserVoteCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  set?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  update?: InputMaybe<Array<UserVoteUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<UserVoteUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<UserVoteUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type UserVoteUpdateManyWithoutIdeaNestedInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserVoteCreateOrConnectWithoutIdeaInput>>;
  create?: InputMaybe<Array<UserVoteCreateWithoutIdeaInput>>;
  createMany?: InputMaybe<UserVoteCreateManyIdeaInputEnvelope>;
  delete?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  set?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  update?: InputMaybe<Array<UserVoteUpdateWithWhereUniqueWithoutIdeaInput>>;
  updateMany?: InputMaybe<Array<UserVoteUpdateManyWithWhereWithoutIdeaInput>>;
  upsert?: InputMaybe<Array<UserVoteUpsertWithWhereUniqueWithoutIdeaInput>>;
};

export type UserVoteUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserVoteCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<UserVoteCreateWithoutPostInput>>;
  createMany?: InputMaybe<UserVoteCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  set?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  update?: InputMaybe<Array<UserVoteUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<UserVoteUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<UserVoteUpsertWithWhereUniqueWithoutPostInput>>;
};

export type UserVoteUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserVoteCreateOrConnectWithoutUpdatedByInput>>;
  create?: InputMaybe<Array<UserVoteCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<UserVoteCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  set?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  update?: InputMaybe<Array<UserVoteUpdateWithWhereUniqueWithoutUpdatedByInput>>;
  updateMany?: InputMaybe<Array<UserVoteUpdateManyWithWhereWithoutUpdatedByInput>>;
  upsert?: InputMaybe<Array<UserVoteUpsertWithWhereUniqueWithoutUpdatedByInput>>;
};

export type UserVoteUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserVoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserVoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserVoteCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserVoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  set?: InputMaybe<Array<UserVoteWhereUniqueInput>>;
  update?: InputMaybe<Array<UserVoteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserVoteUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserVoteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserVoteUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: UserVoteUpdateWithoutCreatedByInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpdateWithWhereUniqueWithoutIdeaInput = {
  data: UserVoteUpdateWithoutIdeaInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpdateWithWhereUniqueWithoutPostInput = {
  data: UserVoteUpdateWithoutPostInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: UserVoteUpdateWithoutUpdatedByInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpdateWithWhereUniqueWithoutUserInput = {
  data: UserVoteUpdateWithoutUserInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpdateWithoutCreatedByInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutUserVotesNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserVotesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserVotesNestedInput>;
};

export type UserVoteUpdateWithoutIdeaInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserVotesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserVotesNestedInput>;
};

export type UserVoteUpdateWithoutPostInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutUserVotesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserVotesNestedInput>;
};

export type UserVoteUpdateWithoutUpdatedByInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutUserVotesNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserVotesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserVotesNestedInput>;
};

export type UserVoteUpdateWithoutUserInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  idea?: InputMaybe<IdeaUpdateOneRequiredWithoutUserVotesNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutUserVotesNestedInput>;
};

export type UserVoteUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: UserVoteCreateWithoutCreatedByInput;
  update: UserVoteUpdateWithoutCreatedByInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpsertWithWhereUniqueWithoutIdeaInput = {
  create: UserVoteCreateWithoutIdeaInput;
  update: UserVoteUpdateWithoutIdeaInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpsertWithWhereUniqueWithoutPostInput = {
  create: UserVoteCreateWithoutPostInput;
  update: UserVoteUpdateWithoutPostInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: UserVoteCreateWithoutUpdatedByInput;
  update: UserVoteUpdateWithoutUpdatedByInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteUpsertWithWhereUniqueWithoutUserInput = {
  create: UserVoteCreateWithoutUserInput;
  update: UserVoteUpdateWithoutUserInput;
  where: UserVoteWhereUniqueInput;
};

export type UserVoteWhereInput = {
  AND?: InputMaybe<Array<UserVoteWhereInput>>;
  NOT?: InputMaybe<Array<UserVoteWhereInput>>;
  OR?: InputMaybe<Array<UserVoteWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  idea?: InputMaybe<IdeaWhereInput>;
  ideaId?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostWhereInput>;
  postId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type UserVoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  approveQuestions?: InputMaybe<QuestionListRelationFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  backgroundUrl?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdAwards?: InputMaybe<AwardListRelationFilter>;
  createdBannerGroups?: InputMaybe<BannerGroupListRelationFilter>;
  createdBanners?: InputMaybe<BannerListRelationFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  createdById?: InputMaybe<StringNullableFilter>;
  createdComments?: InputMaybe<CommentListRelationFilter>;
  createdDepartments?: InputMaybe<DepartmentListRelationFilter>;
  createdEvents?: InputMaybe<EventListRelationFilter>;
  createdFeedbacks?: InputMaybe<FeedbackListRelationFilter>;
  createdIdeas?: InputMaybe<IdeaListRelationFilter>;
  createdIndustries?: InputMaybe<IndustryListRelationFilter>;
  createdNotifications?: InputMaybe<NotificationListRelationFilter>;
  createdPostLikes?: InputMaybe<UserLikedListRelationFilter>;
  createdPostVieweds?: InputMaybe<UserViewedListRelationFilter>;
  createdPosts?: InputMaybe<PostListRelationFilter>;
  createdQuestions?: InputMaybe<QuestionListRelationFilter>;
  createdRoles?: InputMaybe<RoleListRelationFilter>;
  createdTags?: InputMaybe<TagListRelationFilter>;
  createdTopics?: InputMaybe<TopicListRelationFilter>;
  createdUserVotes?: InputMaybe<UserVoteListRelationFilter>;
  createdUsers?: InputMaybe<UserListRelationFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<Array<DateTimeNullableFilter>>;
  department?: InputMaybe<DepartmentWhereInput>;
  departmentId?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  feedbacks?: InputMaybe<FeedbackListRelationFilter>;
  feelingIcon?: InputMaybe<StringNullableFilter>;
  feelingStatus?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringNullableFilter>;
  fullNameUnAccent?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ideas?: InputMaybe<IdeaListRelationFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  jobTitle?: InputMaybe<StringNullableFilter>;
  notificationss?: InputMaybe<NotificationListRelationFilter>;
  originalId?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<StringNullableFilter>;
  postVieweds?: InputMaybe<UserViewedListRelationFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  resolvedQuestions?: InputMaybe<QuestionListRelationFilter>;
  status?: InputMaybe<EnumActiveStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedAwards?: InputMaybe<AwardListRelationFilter>;
  updatedBannerGroups?: InputMaybe<BannerGroupListRelationFilter>;
  updatedBanners?: InputMaybe<BannerListRelationFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  updatedById?: InputMaybe<StringNullableFilter>;
  updatedComments?: InputMaybe<CommentListRelationFilter>;
  updatedDepartments?: InputMaybe<DepartmentListRelationFilter>;
  updatedEvents?: InputMaybe<EventListRelationFilter>;
  updatedFeedbacks?: InputMaybe<FeedbackListRelationFilter>;
  updatedIdeas?: InputMaybe<IdeaListRelationFilter>;
  updatedIndustries?: InputMaybe<IndustryListRelationFilter>;
  updatedNotifications?: InputMaybe<NotificationListRelationFilter>;
  updatedPostLikes?: InputMaybe<UserLikedListRelationFilter>;
  updatedPostVieweds?: InputMaybe<UserViewedListRelationFilter>;
  updatedPosts?: InputMaybe<PostListRelationFilter>;
  updatedQuestions?: InputMaybe<QuestionListRelationFilter>;
  updatedRoles?: InputMaybe<RoleListRelationFilter>;
  updatedTags?: InputMaybe<TagListRelationFilter>;
  updatedTopics?: InputMaybe<TopicListRelationFilter>;
  updatedUserVotes?: InputMaybe<UserVoteListRelationFilter>;
  updatedUsers?: InputMaybe<UserListRelationFilter>;
  userApprovers?: InputMaybe<UserApproverListRelationFilter>;
  userAwards?: InputMaybe<UserAwardListRelationFilter>;
  userDepartments?: InputMaybe<UserDepartmentListRelationFilter>;
  userIndustries?: InputMaybe<UserIndustryListRelationFilter>;
  userLikeds?: InputMaybe<UserLikedListRelationFilter>;
  userSearchHistories?: InputMaybe<UserSearchHistoryListRelationFilter>;
  userVotes?: InputMaybe<UserVoteListRelationFilter>;
};

export type UserWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IdeasQueryVariables = Exact<{
  where?: InputMaybe<IdeaWhereInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IdeaOrderByWithRelationInput> | IdeaOrderByWithRelationInput>;
}>;


export type IdeasQuery = { __typename?: 'Query', ideas: { __typename?: 'IdeaConnection', totalCount: number, nodes?: Array<{ __typename?: 'Idea', id: string, title: string, content?: string | null }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } };

export type IdeaQueryVariables = Exact<{
  where: IdeaWhereUniqueInput;
}>;


export type IdeaQuery = { __typename?: 'Query', idea: { __typename?: 'Idea', id: string, title: string, content?: string | null } };


export const IdeasDocument = `
    query ideas($where: IdeaWhereInput, $skip: Int, $take: Int, $orderBy: [IdeaOrderByWithRelationInput!]) {
  ideas(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    nodes {
      id
      title
      content
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;
export const useIdeasQuery = <
      TData = IdeasQuery,
      TError = unknown
    >(
      variables?: IdeasQueryVariables,
      options?: UseQueryOptions<IdeasQuery, TError, TData>
    ) =>
    useQuery<IdeasQuery, TError, TData>(
      variables === undefined ? ['ideas'] : ['ideas', variables],
      useFetchData<IdeasQuery, IdeasQueryVariables>(IdeasDocument, variables),
      options
    );
useIdeasQuery.document = IdeasDocument;


useIdeasQuery.getKey = (variables?: IdeasQueryVariables) => variables === undefined ? ['ideas'] : ['ideas', variables];
;

useIdeasQuery.fetcher = (variables?: IdeasQueryVariables, options?: RequestInit['headers']) => useFetchData<IdeasQuery, IdeasQueryVariables>(IdeasDocument, variables, options);
export const IdeaDocument = `
    query idea($where: IdeaWhereUniqueInput!) {
  idea(where: $where) {
    id
    title
    content
  }
}
    `;
export const useIdeaQuery = <
      TData = IdeaQuery,
      TError = unknown
    >(
      variables: IdeaQueryVariables,
      options?: UseQueryOptions<IdeaQuery, TError, TData>
    ) =>
    useQuery<IdeaQuery, TError, TData>(
      ['idea', variables],
      useFetchData<IdeaQuery, IdeaQueryVariables>(IdeaDocument, variables),
      options
    );
useIdeaQuery.document = IdeaDocument;


useIdeaQuery.getKey = (variables: IdeaQueryVariables) => ['idea', variables];
;

useIdeaQuery.fetcher = (variables: IdeaQueryVariables, options?: RequestInit['headers']) => useFetchData<IdeaQuery, IdeaQueryVariables>(IdeaDocument, variables, options);