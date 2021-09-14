export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  count: Scalars['Int'];
};

export type AggregateSession_Tags = {
  _avg?: Maybe<Session_TagsAvgAggregate>;
  _count?: Maybe<Session_TagsCountAggregate>;
  _max?: Maybe<Session_TagsMaxAggregate>;
  _min?: Maybe<Session_TagsMinAggregate>;
  _sum?: Maybe<Session_TagsSumAggregate>;
};

export type AggregateSessions = {
  _avg?: Maybe<SessionsAvgAggregate>;
  _count?: Maybe<SessionsCountAggregate>;
  _max?: Maybe<SessionsMaxAggregate>;
  _min?: Maybe<SessionsMinAggregate>;
  _sum?: Maybe<SessionsSumAggregate>;
};

export type AggregateSessions_Session_Tags = {
  _avg?: Maybe<Sessions_Session_TagsAvgAggregate>;
  _count?: Maybe<Sessions_Session_TagsCountAggregate>;
  _max?: Maybe<Sessions_Session_TagsMaxAggregate>;
  _min?: Maybe<Sessions_Session_TagsMinAggregate>;
  _sum?: Maybe<Sessions_Session_TagsSumAggregate>;
};

export type AggregateUsers = {
  _avg?: Maybe<UsersAvgAggregate>;
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
  _sum?: Maybe<UsersSumAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type EnumstatusFieldUpdateOperationsInput = {
  set?: Maybe<Status>;
};

export type EnumstatusFilter = {
  equals?: Maybe<Status>;
  in?: Maybe<Array<Status>>;
  not?: Maybe<NestedEnumstatusFilter>;
  notIn?: Maybe<Array<Status>>;
};

export type EnumstatusWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumstatusFilter>;
  _min?: Maybe<NestedEnumstatusFilter>;
  equals?: Maybe<Status>;
  in?: Maybe<Array<Status>>;
  not?: Maybe<NestedEnumstatusWithAggregatesFilter>;
  notIn?: Maybe<Array<Status>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  createManySession_tags: AffectedRowsOutput;
  createManySessions: AffectedRowsOutput;
  createManySessions_session_tags: AffectedRowsOutput;
  createManyUsers: AffectedRowsOutput;
  createSession_tags: Session_Tags;
  createSessions: Sessions;
  createSessions_session_tags: Sessions_Session_Tags;
  createUsers: Users;
  deleteManySession_tags: AffectedRowsOutput;
  deleteManySessions: AffectedRowsOutput;
  deleteManySessions_session_tags: AffectedRowsOutput;
  deleteManyUsers: AffectedRowsOutput;
  deleteSession_tags?: Maybe<Session_Tags>;
  deleteSessions?: Maybe<Sessions>;
  deleteSessions_session_tags?: Maybe<Sessions_Session_Tags>;
  deleteUsers?: Maybe<Users>;
  updateManySession_tags: AffectedRowsOutput;
  updateManySessions: AffectedRowsOutput;
  updateManySessions_session_tags: AffectedRowsOutput;
  updateManyUsers: AffectedRowsOutput;
  updateSession_tags?: Maybe<Session_Tags>;
  updateSessions?: Maybe<Sessions>;
  updateSessions_session_tags?: Maybe<Sessions_Session_Tags>;
  updateUsers?: Maybe<Users>;
  upsertSession_tags: Session_Tags;
  upsertSessions: Sessions;
  upsertSessions_session_tags: Sessions_Session_Tags;
  upsertUsers: Users;
};


export type MutationCreateManySession_TagsArgs = {
  data: Array<Session_TagsCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionsArgs = {
  data: Array<SessionsCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySessions_Session_TagsArgs = {
  data: Array<Sessions_Session_TagsCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyUsersArgs = {
  data: Array<UsersCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateSession_TagsArgs = {
  data: Session_TagsUncheckedCreateInput;
};


export type MutationCreateSessionsArgs = {
  data: SessionsUncheckedCreateInput;
};


export type MutationCreateSessions_Session_TagsArgs = {
  data: Sessions_Session_TagsUncheckedCreateInput;
};


export type MutationCreateUsersArgs = {
  data: UsersUncheckedCreateInput;
};


export type MutationDeleteManySession_TagsArgs = {
  where?: Maybe<Session_TagsWhereInput>;
};


export type MutationDeleteManySessionsArgs = {
  where?: Maybe<SessionsWhereInput>;
};


export type MutationDeleteManySessions_Session_TagsArgs = {
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UsersWhereInput>;
};


export type MutationDeleteSession_TagsArgs = {
  where: Session_TagsWhereUniqueInput;
};


export type MutationDeleteSessionsArgs = {
  where: SessionsWhereUniqueInput;
};


export type MutationDeleteSessions_Session_TagsArgs = {
  where: Sessions_Session_TagsWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: UsersWhereUniqueInput;
};


export type MutationUpdateManySession_TagsArgs = {
  data: Session_TagsUncheckedUpdateManyInput;
  where?: Maybe<Session_TagsWhereInput>;
};


export type MutationUpdateManySessionsArgs = {
  data: SessionsUncheckedUpdateManyInput;
  where?: Maybe<SessionsWhereInput>;
};


export type MutationUpdateManySessions_Session_TagsArgs = {
  data: Sessions_Session_TagsUncheckedUpdateManyInput;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};


export type MutationUpdateManyUsersArgs = {
  data: UsersUncheckedUpdateManyInput;
  where?: Maybe<UsersWhereInput>;
};


export type MutationUpdateSession_TagsArgs = {
  data: Session_TagsUncheckedUpdateInput;
  where: Session_TagsWhereUniqueInput;
};


export type MutationUpdateSessionsArgs = {
  data: SessionsUncheckedUpdateInput;
  where: SessionsWhereUniqueInput;
};


export type MutationUpdateSessions_Session_TagsArgs = {
  data: Sessions_Session_TagsUncheckedUpdateInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: UsersUncheckedUpdateInput;
  where: UsersWhereUniqueInput;
};


export type MutationUpsertSession_TagsArgs = {
  create: Session_TagsUncheckedCreateInput;
  update: Session_TagsUncheckedUpdateInput;
  where: Session_TagsWhereUniqueInput;
};


export type MutationUpsertSessionsArgs = {
  create: SessionsUncheckedCreateInput;
  update: SessionsUncheckedUpdateInput;
  where: SessionsWhereUniqueInput;
};


export type MutationUpsertSessions_Session_TagsArgs = {
  create: Sessions_Session_TagsUncheckedCreateInput;
  update: Sessions_Session_TagsUncheckedUpdateInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};


export type MutationUpsertUsersArgs = {
  create: UsersUncheckedCreateInput;
  update: UsersUncheckedUpdateInput;
  where: UsersWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumstatusFilter = {
  equals?: Maybe<Status>;
  in?: Maybe<Array<Status>>;
  not?: Maybe<NestedEnumstatusFilter>;
  notIn?: Maybe<Array<Status>>;
};

export type NestedEnumstatusWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumstatusFilter>;
  _min?: Maybe<NestedEnumstatusFilter>;
  equals?: Maybe<Status>;
  in?: Maybe<Array<Status>>;
  not?: Maybe<NestedEnumstatusWithAggregatesFilter>;
  notIn?: Maybe<Array<Status>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  aggregateSession_tags: AggregateSession_Tags;
  aggregateSessions: AggregateSessions;
  aggregateSessions_session_tags: AggregateSessions_Session_Tags;
  aggregateUsers: AggregateUsers;
  findFirstSession_tags?: Maybe<Session_Tags>;
  findFirstSessions?: Maybe<Sessions>;
  findFirstSessions_session_tags?: Maybe<Sessions_Session_Tags>;
  findFirstUsers?: Maybe<Users>;
  findManySession_tags: Array<Session_Tags>;
  findManySessions: Array<Sessions>;
  findManySessions_session_tags: Array<Sessions_Session_Tags>;
  findManyUsers: Array<Users>;
  findUniqueSession_tags?: Maybe<Session_Tags>;
  findUniqueSessions?: Maybe<Sessions>;
  findUniqueSessions_session_tags?: Maybe<Sessions_Session_Tags>;
  findUniqueUsers?: Maybe<Users>;
  groupBySession_tags: Array<Session_TagsGroupBy>;
  groupBySessions: Array<SessionsGroupBy>;
  groupBySessions_session_tags: Array<Sessions_Session_TagsGroupBy>;
  groupByUsers: Array<UsersGroupBy>;
};


export type QueryAggregateSession_TagsArgs = {
  cursor?: Maybe<Session_TagsWhereUniqueInput>;
  orderBy?: Maybe<Array<Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Session_TagsWhereInput>;
};


export type QueryAggregateSessionsArgs = {
  cursor?: Maybe<SessionsWhereUniqueInput>;
  orderBy?: Maybe<Array<SessionsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionsWhereInput>;
};


export type QueryAggregateSessions_Session_TagsArgs = {
  cursor?: Maybe<Sessions_Session_TagsWhereUniqueInput>;
  orderBy?: Maybe<Array<Sessions_Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};


export type QueryAggregateUsersArgs = {
  cursor?: Maybe<UsersWhereUniqueInput>;
  orderBy?: Maybe<Array<UsersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersWhereInput>;
};


export type QueryFindFirstSession_TagsArgs = {
  cursor?: Maybe<Session_TagsWhereUniqueInput>;
  distinct?: Maybe<Array<Session_TagsScalarFieldEnum>>;
  orderBy?: Maybe<Array<Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Session_TagsWhereInput>;
};


export type QueryFindFirstSessionsArgs = {
  cursor?: Maybe<SessionsWhereUniqueInput>;
  distinct?: Maybe<Array<SessionsScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionsWhereInput>;
};


export type QueryFindFirstSessions_Session_TagsArgs = {
  cursor?: Maybe<Sessions_Session_TagsWhereUniqueInput>;
  distinct?: Maybe<Array<Sessions_Session_TagsScalarFieldEnum>>;
  orderBy?: Maybe<Array<Sessions_Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};


export type QueryFindFirstUsersArgs = {
  cursor?: Maybe<UsersWhereUniqueInput>;
  distinct?: Maybe<Array<UsersScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersWhereInput>;
};


export type QueryFindManySession_TagsArgs = {
  cursor?: Maybe<Session_TagsWhereUniqueInput>;
  distinct?: Maybe<Array<Session_TagsScalarFieldEnum>>;
  orderBy?: Maybe<Array<Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Session_TagsWhereInput>;
};


export type QueryFindManySessionsArgs = {
  cursor?: Maybe<SessionsWhereUniqueInput>;
  distinct?: Maybe<Array<SessionsScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionsWhereInput>;
};


export type QueryFindManySessions_Session_TagsArgs = {
  cursor?: Maybe<Sessions_Session_TagsWhereUniqueInput>;
  distinct?: Maybe<Array<Sessions_Session_TagsScalarFieldEnum>>;
  orderBy?: Maybe<Array<Sessions_Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};


export type QueryFindManyUsersArgs = {
  cursor?: Maybe<UsersWhereUniqueInput>;
  distinct?: Maybe<Array<UsersScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersWhereInput>;
};


export type QueryFindUniqueSession_TagsArgs = {
  where: Session_TagsWhereUniqueInput;
};


export type QueryFindUniqueSessionsArgs = {
  where: SessionsWhereUniqueInput;
};


export type QueryFindUniqueSessions_Session_TagsArgs = {
  where: Sessions_Session_TagsWhereUniqueInput;
};


export type QueryFindUniqueUsersArgs = {
  where: UsersWhereUniqueInput;
};


export type QueryGroupBySession_TagsArgs = {
  by: Array<Session_TagsScalarFieldEnum>;
  having?: Maybe<Session_TagsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<Session_TagsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Session_TagsWhereInput>;
};


export type QueryGroupBySessionsArgs = {
  by: Array<SessionsScalarFieldEnum>;
  having?: Maybe<SessionsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SessionsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionsWhereInput>;
};


export type QueryGroupBySessions_Session_TagsArgs = {
  by: Array<Sessions_Session_TagsScalarFieldEnum>;
  having?: Maybe<Sessions_Session_TagsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<Sessions_Session_TagsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};


export type QueryGroupByUsersArgs = {
  by: Array<UsersScalarFieldEnum>;
  having?: Maybe<UsersScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UsersOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersWhereInput>;
};

export type Session_Tags = {
  _count?: Maybe<Session_TagsCount>;
  created_at: Scalars['DateTime'];
  id: Scalars['Int'];
  label: Scalars['String'];
  sessions: Array<Sessions_Session_Tags>;
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type Session_TagsSessionsArgs = {
  cursor?: Maybe<Sessions_Session_TagsWhereUniqueInput>;
  distinct?: Maybe<Array<Sessions_Session_TagsScalarFieldEnum>>;
  orderBy?: Maybe<Array<Sessions_Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};

export type Session_TagsAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type Session_TagsAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type Session_TagsCount = {
  sessions: Scalars['Int'];
};

export type Session_TagsCountAggregate = {
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  label: Scalars['Int'];
  slug: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type Session_TagsCountOrderByAggregateInput = {
  created_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type Session_TagsCreateManyInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Session_TagsCreateNestedOneWithoutSessionsInput = {
  connect?: Maybe<Session_TagsWhereUniqueInput>;
  connectOrCreate?: Maybe<Session_TagsCreateOrConnectWithoutSessionsInput>;
  create?: Maybe<Session_TagsUncheckedCreateWithoutSessionsInput>;
};

export type Session_TagsCreateOrConnectWithoutSessionsInput = {
  create: Session_TagsUncheckedCreateWithoutSessionsInput;
  where: Session_TagsWhereUniqueInput;
};

export type Session_TagsGroupBy = {
  _avg?: Maybe<Session_TagsAvgAggregate>;
  _count?: Maybe<Session_TagsCountAggregate>;
  _max?: Maybe<Session_TagsMaxAggregate>;
  _min?: Maybe<Session_TagsMinAggregate>;
  _sum?: Maybe<Session_TagsSumAggregate>;
  created_at: Scalars['DateTime'];
  id: Scalars['Int'];
  label: Scalars['String'];
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Session_TagsMaxAggregate = {
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Session_TagsMaxOrderByAggregateInput = {
  created_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type Session_TagsMinAggregate = {
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Session_TagsMinOrderByAggregateInput = {
  created_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type Session_TagsOrderByWithAggregationInput = {
  _avg?: Maybe<Session_TagsAvgOrderByAggregateInput>;
  _count?: Maybe<Session_TagsCountOrderByAggregateInput>;
  _max?: Maybe<Session_TagsMaxOrderByAggregateInput>;
  _min?: Maybe<Session_TagsMinOrderByAggregateInput>;
  _sum?: Maybe<Session_TagsSumOrderByAggregateInput>;
  created_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type Session_TagsOrderByWithRelationInput = {
  created_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  sessions?: Maybe<Sessions_Session_TagsOrderByRelationAggregateInput>;
  slug?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type Session_TagsRelationFilter = {
  is?: Maybe<Session_TagsWhereInput>;
  isNot?: Maybe<Session_TagsWhereInput>;
};

export enum Session_TagsScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  Label = 'label',
  Slug = 'slug',
  UpdatedAt = 'updated_at'
}

export type Session_TagsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Session_TagsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<Session_TagsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<Session_TagsScalarWhereWithAggregatesInput>>;
  created_at?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  label?: Maybe<StringWithAggregatesFilter>;
  slug?: Maybe<StringWithAggregatesFilter>;
  updated_at?: Maybe<DateTimeWithAggregatesFilter>;
};

export type Session_TagsSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type Session_TagsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type Session_TagsUncheckedCreateInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label: Scalars['String'];
  sessions?: Maybe<Sessions_Session_TagsUncheckedCreateNestedManyWithoutTagInput>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Session_TagsUncheckedCreateWithoutSessionsInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Session_TagsUncheckedUpdateInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
  sessions?: Maybe<Sessions_Session_TagsUncheckedUpdateManyWithoutTagInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type Session_TagsUncheckedUpdateManyInput = {
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type Session_TagsWhereInput = {
  AND?: Maybe<Array<Session_TagsWhereInput>>;
  NOT?: Maybe<Array<Session_TagsWhereInput>>;
  OR?: Maybe<Array<Session_TagsWhereInput>>;
  created_at?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  label?: Maybe<StringFilter>;
  sessions?: Maybe<Sessions_Session_TagsListRelationFilter>;
  slug?: Maybe<StringFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type Session_TagsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Sessions = {
  _count?: Maybe<SessionsCount>;
  author: Users;
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  ended_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  slug: Scalars['String'];
  started_at: Scalars['DateTime'];
  status: Status;
  tags: Array<Sessions_Session_Tags>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type SessionsTagsArgs = {
  cursor?: Maybe<Sessions_Session_TagsWhereUniqueInput>;
  distinct?: Maybe<Array<Sessions_Session_TagsScalarFieldEnum>>;
  orderBy?: Maybe<Array<Sessions_Session_TagsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Sessions_Session_TagsWhereInput>;
};

export type SessionsAvgAggregate = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type SessionsAvgOrderByAggregateInput = {
  author_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type SessionsCount = {
  tags: Scalars['Int'];
};

export type SessionsCountAggregate = {
  _all: Scalars['Int'];
  author_id: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  ended_at: Scalars['Int'];
  id: Scalars['Int'];
  slug: Scalars['Int'];
  started_at: Scalars['Int'];
  status: Scalars['Int'];
  title: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type SessionsCountOrderByAggregateInput = {
  author_id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  ended_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  started_at?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type SessionsCreateManyAuthorInput = {
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsCreateManyAuthorInputEnvelope = {
  data: Array<SessionsCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SessionsCreateManyInput = {
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsCreateNestedOneWithoutTagsInput = {
  connect?: Maybe<SessionsWhereUniqueInput>;
  connectOrCreate?: Maybe<SessionsCreateOrConnectWithoutTagsInput>;
  create?: Maybe<SessionsUncheckedCreateWithoutTagsInput>;
};

export type SessionsCreateOrConnectWithoutAuthorInput = {
  create: SessionsUncheckedCreateWithoutAuthorInput;
  where: SessionsWhereUniqueInput;
};

export type SessionsCreateOrConnectWithoutTagsInput = {
  create: SessionsUncheckedCreateWithoutTagsInput;
  where: SessionsWhereUniqueInput;
};

export type SessionsCreateWithoutAuthorInput = {
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  tags?: Maybe<Sessions_Session_TagsCreateNestedManyWithoutSessionInput>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsGroupBy = {
  _avg?: Maybe<SessionsAvgAggregate>;
  _count?: Maybe<SessionsCountAggregate>;
  _max?: Maybe<SessionsMaxAggregate>;
  _min?: Maybe<SessionsMinAggregate>;
  _sum?: Maybe<SessionsSumAggregate>;
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  ended_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  slug: Scalars['String'];
  started_at: Scalars['DateTime'];
  status: Status;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type SessionsListRelationFilter = {
  every?: Maybe<SessionsWhereInput>;
  none?: Maybe<SessionsWhereInput>;
  some?: Maybe<SessionsWhereInput>;
};

export type SessionsMaxAggregate = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsMaxOrderByAggregateInput = {
  author_id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  ended_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  started_at?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type SessionsMinAggregate = {
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsMinOrderByAggregateInput = {
  author_id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  ended_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  started_at?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type SessionsOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SessionsOrderByWithAggregationInput = {
  _avg?: Maybe<SessionsAvgOrderByAggregateInput>;
  _count?: Maybe<SessionsCountOrderByAggregateInput>;
  _max?: Maybe<SessionsMaxOrderByAggregateInput>;
  _min?: Maybe<SessionsMinOrderByAggregateInput>;
  _sum?: Maybe<SessionsSumOrderByAggregateInput>;
  author_id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  ended_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  started_at?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type SessionsOrderByWithRelationInput = {
  author?: Maybe<UsersOrderByWithRelationInput>;
  author_id?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  ended_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  started_at?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  tags?: Maybe<Sessions_Session_TagsOrderByRelationAggregateInput>;
  title?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type SessionsRelationFilter = {
  is?: Maybe<SessionsWhereInput>;
  isNot?: Maybe<SessionsWhereInput>;
};

export enum SessionsScalarFieldEnum {
  AuthorId = 'author_id',
  Content = 'content',
  CreatedAt = 'created_at',
  EndedAt = 'ended_at',
  Id = 'id',
  Slug = 'slug',
  StartedAt = 'started_at',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type SessionsScalarWhereInput = {
  AND?: Maybe<Array<SessionsScalarWhereInput>>;
  NOT?: Maybe<Array<SessionsScalarWhereInput>>;
  OR?: Maybe<Array<SessionsScalarWhereInput>>;
  author_id?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  created_at?: Maybe<DateTimeFilter>;
  ended_at?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  slug?: Maybe<StringFilter>;
  started_at?: Maybe<DateTimeFilter>;
  status?: Maybe<EnumstatusFilter>;
  title?: Maybe<StringFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type SessionsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SessionsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SessionsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SessionsScalarWhereWithAggregatesInput>>;
  author_id?: Maybe<IntWithAggregatesFilter>;
  content?: Maybe<StringWithAggregatesFilter>;
  created_at?: Maybe<DateTimeWithAggregatesFilter>;
  ended_at?: Maybe<DateTimeNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  slug?: Maybe<StringWithAggregatesFilter>;
  started_at?: Maybe<DateTimeWithAggregatesFilter>;
  status?: Maybe<EnumstatusWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updated_at?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SessionsSumAggregate = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type SessionsSumOrderByAggregateInput = {
  author_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type SessionsUncheckedCreateInput = {
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  tags?: Maybe<Sessions_Session_TagsUncheckedCreateNestedManyWithoutSessionInput>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<SessionsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionsCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<SessionsCreateWithoutAuthorInput>>;
  createMany?: Maybe<SessionsCreateManyAuthorInputEnvelope>;
};

export type SessionsUncheckedCreateWithoutAuthorInput = {
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  tags?: Maybe<Sessions_Session_TagsUncheckedCreateNestedManyWithoutSessionInput>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsUncheckedCreateWithoutTagsInput = {
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  ended_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SessionsUncheckedUpdateInput = {
  author_id?: Maybe<IntFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  ended_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  started_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumstatusFieldUpdateOperationsInput>;
  tags?: Maybe<Sessions_Session_TagsUncheckedUpdateManyWithoutSessionInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionsUncheckedUpdateManyInput = {
  author_id?: Maybe<IntFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  ended_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  started_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumstatusFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionsUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<SessionsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionsCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<SessionsCreateWithoutAuthorInput>>;
  createMany?: Maybe<SessionsCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<SessionsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SessionsScalarWhereInput>>;
  disconnect?: Maybe<Array<SessionsWhereUniqueInput>>;
  set?: Maybe<Array<SessionsWhereUniqueInput>>;
  update?: Maybe<Array<SessionsUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<SessionsUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<SessionsUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type SessionsUncheckedUpdateManyWithoutSessionsInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  ended_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  started_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumstatusFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionsUncheckedUpdateWithoutAuthorInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  ended_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  started_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumstatusFieldUpdateOperationsInput>;
  tags?: Maybe<Sessions_Session_TagsUncheckedUpdateManyWithoutSessionInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionsUpdateManyWithWhereWithoutAuthorInput = {
  data: SessionsUncheckedUpdateManyWithoutSessionsInput;
  where: SessionsScalarWhereInput;
};

export type SessionsUpdateWithWhereUniqueWithoutAuthorInput = {
  data: SessionsUncheckedUpdateWithoutAuthorInput;
  where: SessionsWhereUniqueInput;
};

export type SessionsUpsertWithWhereUniqueWithoutAuthorInput = {
  create: SessionsUncheckedCreateWithoutAuthorInput;
  update: SessionsUncheckedUpdateWithoutAuthorInput;
  where: SessionsWhereUniqueInput;
};

export type SessionsWhereInput = {
  AND?: Maybe<Array<SessionsWhereInput>>;
  NOT?: Maybe<Array<SessionsWhereInput>>;
  OR?: Maybe<Array<SessionsWhereInput>>;
  author?: Maybe<UsersRelationFilter>;
  author_id?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  created_at?: Maybe<DateTimeFilter>;
  ended_at?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  slug?: Maybe<StringFilter>;
  started_at?: Maybe<DateTimeFilter>;
  status?: Maybe<EnumstatusFilter>;
  tags?: Maybe<Sessions_Session_TagsListRelationFilter>;
  title?: Maybe<StringFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type SessionsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Sessions_Session_Tags = {
  session: Sessions;
  session_id: Scalars['Int'];
  tag: Session_Tags;
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsAvgAggregate = {
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

export type Sessions_Session_TagsAvgOrderByAggregateInput = {
  session_id?: Maybe<SortOrder>;
  tag_id?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsCountAggregate = {
  _all: Scalars['Int'];
  session_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsCountOrderByAggregateInput = {
  session_id?: Maybe<SortOrder>;
  tag_id?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsCreateManyInput = {
  session_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsCreateManySessionInput = {
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsCreateManySessionInputEnvelope = {
  data: Array<Sessions_Session_TagsCreateManySessionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type Sessions_Session_TagsCreateManyTagInput = {
  session_id: Scalars['Int'];
};

export type Sessions_Session_TagsCreateManyTagInputEnvelope = {
  data: Array<Sessions_Session_TagsCreateManyTagInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type Sessions_Session_TagsCreateNestedManyWithoutSessionInput = {
  connect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<Sessions_Session_TagsCreateOrConnectWithoutSessionInput>>;
  create?: Maybe<Array<Sessions_Session_TagsCreateWithoutSessionInput>>;
  createMany?: Maybe<Sessions_Session_TagsCreateManySessionInputEnvelope>;
};

export type Sessions_Session_TagsCreateOrConnectWithoutSessionInput = {
  create: Sessions_Session_TagsUncheckedCreateWithoutSessionInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};

export type Sessions_Session_TagsCreateOrConnectWithoutTagInput = {
  create: Sessions_Session_TagsUncheckedCreateWithoutTagInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};

export type Sessions_Session_TagsCreateWithoutSessionInput = {
  tag: Session_TagsCreateNestedOneWithoutSessionsInput;
};

export type Sessions_Session_TagsCreateWithoutTagInput = {
  session: SessionsCreateNestedOneWithoutTagsInput;
};

export type Sessions_Session_TagsGroupBy = {
  _avg?: Maybe<Sessions_Session_TagsAvgAggregate>;
  _count?: Maybe<Sessions_Session_TagsCountAggregate>;
  _max?: Maybe<Sessions_Session_TagsMaxAggregate>;
  _min?: Maybe<Sessions_Session_TagsMinAggregate>;
  _sum?: Maybe<Sessions_Session_TagsSumAggregate>;
  session_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsListRelationFilter = {
  every?: Maybe<Sessions_Session_TagsWhereInput>;
  none?: Maybe<Sessions_Session_TagsWhereInput>;
  some?: Maybe<Sessions_Session_TagsWhereInput>;
};

export type Sessions_Session_TagsMaxAggregate = {
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

export type Sessions_Session_TagsMaxOrderByAggregateInput = {
  session_id?: Maybe<SortOrder>;
  tag_id?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsMinAggregate = {
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

export type Sessions_Session_TagsMinOrderByAggregateInput = {
  session_id?: Maybe<SortOrder>;
  tag_id?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsOrderByWithAggregationInput = {
  _avg?: Maybe<Sessions_Session_TagsAvgOrderByAggregateInput>;
  _count?: Maybe<Sessions_Session_TagsCountOrderByAggregateInput>;
  _max?: Maybe<Sessions_Session_TagsMaxOrderByAggregateInput>;
  _min?: Maybe<Sessions_Session_TagsMinOrderByAggregateInput>;
  _sum?: Maybe<Sessions_Session_TagsSumOrderByAggregateInput>;
  session_id?: Maybe<SortOrder>;
  tag_id?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsOrderByWithRelationInput = {
  session?: Maybe<SessionsOrderByWithRelationInput>;
  session_id?: Maybe<SortOrder>;
  tag?: Maybe<Session_TagsOrderByWithRelationInput>;
  tag_id?: Maybe<SortOrder>;
};

export enum Sessions_Session_TagsScalarFieldEnum {
  SessionId = 'session_id',
  TagId = 'tag_id'
}

export type Sessions_Session_TagsScalarWhereInput = {
  AND?: Maybe<Array<Sessions_Session_TagsScalarWhereInput>>;
  NOT?: Maybe<Array<Sessions_Session_TagsScalarWhereInput>>;
  OR?: Maybe<Array<Sessions_Session_TagsScalarWhereInput>>;
  session_id?: Maybe<IntFilter>;
  tag_id?: Maybe<IntFilter>;
};

export type Sessions_Session_TagsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Sessions_Session_TagsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<Sessions_Session_TagsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<Sessions_Session_TagsScalarWhereWithAggregatesInput>>;
  session_id?: Maybe<IntWithAggregatesFilter>;
  tag_id?: Maybe<IntWithAggregatesFilter>;
};

export type Sessions_Session_TagsSumAggregate = {
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

export type Sessions_Session_TagsSumOrderByAggregateInput = {
  session_id?: Maybe<SortOrder>;
  tag_id?: Maybe<SortOrder>;
};

export type Sessions_Session_TagsUncheckedCreateInput = {
  session_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsUncheckedCreateNestedManyWithoutSessionInput = {
  connect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<Sessions_Session_TagsCreateOrConnectWithoutSessionInput>>;
  create?: Maybe<Array<Sessions_Session_TagsCreateWithoutSessionInput>>;
  createMany?: Maybe<Sessions_Session_TagsCreateManySessionInputEnvelope>;
};

export type Sessions_Session_TagsUncheckedCreateNestedManyWithoutTagInput = {
  connect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<Sessions_Session_TagsCreateOrConnectWithoutTagInput>>;
  create?: Maybe<Array<Sessions_Session_TagsCreateWithoutTagInput>>;
  createMany?: Maybe<Sessions_Session_TagsCreateManyTagInputEnvelope>;
};

export type Sessions_Session_TagsUncheckedCreateWithoutSessionInput = {
  tag_id: Scalars['Int'];
};

export type Sessions_Session_TagsUncheckedCreateWithoutTagInput = {
  session_id: Scalars['Int'];
};

export type Sessions_Session_TagsUncheckedUpdateInput = {
  session_id?: Maybe<IntFieldUpdateOperationsInput>;
  tag_id?: Maybe<IntFieldUpdateOperationsInput>;
};

export type Sessions_Session_TagsUncheckedUpdateManyInput = {
  session_id?: Maybe<IntFieldUpdateOperationsInput>;
  tag_id?: Maybe<IntFieldUpdateOperationsInput>;
};

export type Sessions_Session_TagsUncheckedUpdateManyWithoutSessionInput = {
  connect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<Sessions_Session_TagsCreateOrConnectWithoutSessionInput>>;
  create?: Maybe<Array<Sessions_Session_TagsCreateWithoutSessionInput>>;
  createMany?: Maybe<Sessions_Session_TagsCreateManySessionInputEnvelope>;
  delete?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<Sessions_Session_TagsScalarWhereInput>>;
  disconnect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  set?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  update?: Maybe<Array<Sessions_Session_TagsUpdateWithWhereUniqueWithoutSessionInput>>;
  updateMany?: Maybe<Array<Sessions_Session_TagsUpdateManyWithWhereWithoutSessionInput>>;
  upsert?: Maybe<Array<Sessions_Session_TagsUpsertWithWhereUniqueWithoutSessionInput>>;
};

export type Sessions_Session_TagsUncheckedUpdateManyWithoutSessionsInput = {
  session_id?: Maybe<IntFieldUpdateOperationsInput>;
};

export type Sessions_Session_TagsUncheckedUpdateManyWithoutTagInput = {
  connect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<Sessions_Session_TagsCreateOrConnectWithoutTagInput>>;
  create?: Maybe<Array<Sessions_Session_TagsCreateWithoutTagInput>>;
  createMany?: Maybe<Sessions_Session_TagsCreateManyTagInputEnvelope>;
  delete?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<Sessions_Session_TagsScalarWhereInput>>;
  disconnect?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  set?: Maybe<Array<Sessions_Session_TagsWhereUniqueInput>>;
  update?: Maybe<Array<Sessions_Session_TagsUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: Maybe<Array<Sessions_Session_TagsUpdateManyWithWhereWithoutTagInput>>;
  upsert?: Maybe<Array<Sessions_Session_TagsUpsertWithWhereUniqueWithoutTagInput>>;
};

export type Sessions_Session_TagsUncheckedUpdateManyWithoutTagsInput = {
  tag_id?: Maybe<IntFieldUpdateOperationsInput>;
};

export type Sessions_Session_TagsUncheckedUpdateWithoutSessionInput = {
  tag_id?: Maybe<IntFieldUpdateOperationsInput>;
};

export type Sessions_Session_TagsUncheckedUpdateWithoutTagInput = {
  session_id?: Maybe<IntFieldUpdateOperationsInput>;
};

export type Sessions_Session_TagsUpdateManyWithWhereWithoutSessionInput = {
  data: Sessions_Session_TagsUncheckedUpdateManyWithoutTagsInput;
  where: Sessions_Session_TagsScalarWhereInput;
};

export type Sessions_Session_TagsUpdateManyWithWhereWithoutTagInput = {
  data: Sessions_Session_TagsUncheckedUpdateManyWithoutSessionsInput;
  where: Sessions_Session_TagsScalarWhereInput;
};

export type Sessions_Session_TagsUpdateWithWhereUniqueWithoutSessionInput = {
  data: Sessions_Session_TagsUncheckedUpdateWithoutSessionInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};

export type Sessions_Session_TagsUpdateWithWhereUniqueWithoutTagInput = {
  data: Sessions_Session_TagsUncheckedUpdateWithoutTagInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};

export type Sessions_Session_TagsUpsertWithWhereUniqueWithoutSessionInput = {
  create: Sessions_Session_TagsUncheckedCreateWithoutSessionInput;
  update: Sessions_Session_TagsUncheckedUpdateWithoutSessionInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};

export type Sessions_Session_TagsUpsertWithWhereUniqueWithoutTagInput = {
  create: Sessions_Session_TagsUncheckedCreateWithoutTagInput;
  update: Sessions_Session_TagsUncheckedUpdateWithoutTagInput;
  where: Sessions_Session_TagsWhereUniqueInput;
};

export type Sessions_Session_TagsWhereInput = {
  AND?: Maybe<Array<Sessions_Session_TagsWhereInput>>;
  NOT?: Maybe<Array<Sessions_Session_TagsWhereInput>>;
  OR?: Maybe<Array<Sessions_Session_TagsWhereInput>>;
  session?: Maybe<SessionsRelationFilter>;
  session_id?: Maybe<IntFilter>;
  tag?: Maybe<Session_TagsRelationFilter>;
  tag_id?: Maybe<IntFilter>;
};

export type Sessions_Session_TagsWhereUniqueInput = {
  session_id_tag_id?: Maybe<Sessions_Session_TagsSession_IdTag_IdCompoundUniqueInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Users = {
  _count?: Maybe<UsersCount>;
  auth_id: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  sessions: Array<Sessions>;
  user_name: Scalars['String'];
};


export type UsersSessionsArgs = {
  cursor?: Maybe<SessionsWhereUniqueInput>;
  distinct?: Maybe<Array<SessionsScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionsWhereInput>;
};

export type UsersAvgAggregate = {
  id?: Maybe<Scalars['Float']>;
};

export type UsersAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UsersCount = {
  sessions: Scalars['Int'];
};

export type UsersCountAggregate = {
  _all: Scalars['Int'];
  auth_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  user_name: Scalars['Int'];
};

export type UsersCountOrderByAggregateInput = {
  auth_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  user_name?: Maybe<SortOrder>;
};

export type UsersCreateManyInput = {
  auth_id: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

export type UsersGroupBy = {
  _avg?: Maybe<UsersAvgAggregate>;
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
  _sum?: Maybe<UsersSumAggregate>;
  auth_id: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  user_name: Scalars['String'];
};

export type UsersMaxAggregate = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

export type UsersMaxOrderByAggregateInput = {
  auth_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  user_name?: Maybe<SortOrder>;
};

export type UsersMinAggregate = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

export type UsersMinOrderByAggregateInput = {
  auth_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  user_name?: Maybe<SortOrder>;
};

export type UsersOrderByWithAggregationInput = {
  _avg?: Maybe<UsersAvgOrderByAggregateInput>;
  _count?: Maybe<UsersCountOrderByAggregateInput>;
  _max?: Maybe<UsersMaxOrderByAggregateInput>;
  _min?: Maybe<UsersMinOrderByAggregateInput>;
  _sum?: Maybe<UsersSumOrderByAggregateInput>;
  auth_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  user_name?: Maybe<SortOrder>;
};

export type UsersOrderByWithRelationInput = {
  auth_id?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sessions?: Maybe<SessionsOrderByRelationAggregateInput>;
  user_name?: Maybe<SortOrder>;
};

export type UsersRelationFilter = {
  is?: Maybe<UsersWhereInput>;
  isNot?: Maybe<UsersWhereInput>;
};

export enum UsersScalarFieldEnum {
  AuthId = 'auth_id',
  Id = 'id',
  Name = 'name',
  UserName = 'user_name'
}

export type UsersScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UsersScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UsersScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UsersScalarWhereWithAggregatesInput>>;
  auth_id?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  user_name?: Maybe<StringWithAggregatesFilter>;
};

export type UsersSumAggregate = {
  id?: Maybe<Scalars['Int']>;
};

export type UsersSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UsersUncheckedCreateInput = {
  auth_id: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<SessionsUncheckedCreateNestedManyWithoutAuthorInput>;
  user_name?: Maybe<Scalars['String']>;
};

export type UsersUncheckedUpdateInput = {
  auth_id?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionsUncheckedUpdateManyWithoutAuthorInput>;
  user_name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UsersUncheckedUpdateManyInput = {
  auth_id?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  user_name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UsersWhereInput = {
  AND?: Maybe<Array<UsersWhereInput>>;
  NOT?: Maybe<Array<UsersWhereInput>>;
  OR?: Maybe<Array<UsersWhereInput>>;
  auth_id?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  sessions?: Maybe<SessionsListRelationFilter>;
  user_name?: Maybe<StringFilter>;
};

export type UsersWhereUniqueInput = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_name?: Maybe<Scalars['String']>;
};

export type Sessions_Session_TagsSession_IdTag_IdCompoundUniqueInput = {
  session_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}
