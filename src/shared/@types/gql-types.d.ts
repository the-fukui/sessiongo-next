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
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "session_tags" */
  delete_session_tags?: Maybe<Session_Tags_Mutation_Response>;
  /** delete single row from the table: "session_tags" */
  delete_session_tags_by_pk?: Maybe<Session_Tags>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "sessions_session_tags" */
  delete_sessions_session_tags?: Maybe<Sessions_Session_Tags_Mutation_Response>;
  /** delete single row from the table: "sessions_session_tags" */
  delete_sessions_session_tags_by_pk?: Maybe<Sessions_Session_Tags>;
  /** delete data from the table: "sessions_status" */
  delete_sessions_status?: Maybe<Sessions_Status_Mutation_Response>;
  /** delete single row from the table: "sessions_status" */
  delete_sessions_status_by_pk?: Maybe<Sessions_Status>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "session_tags" */
  insert_session_tags?: Maybe<Session_Tags_Mutation_Response>;
  /** insert a single row into the table: "session_tags" */
  insert_session_tags_one?: Maybe<Session_Tags>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "sessions_session_tags" */
  insert_sessions_session_tags?: Maybe<Sessions_Session_Tags_Mutation_Response>;
  /** insert a single row into the table: "sessions_session_tags" */
  insert_sessions_session_tags_one?: Maybe<Sessions_Session_Tags>;
  /** insert data into the table: "sessions_status" */
  insert_sessions_status?: Maybe<Sessions_Status_Mutation_Response>;
  /** insert a single row into the table: "sessions_status" */
  insert_sessions_status_one?: Maybe<Sessions_Status>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "session_tags" */
  update_session_tags?: Maybe<Session_Tags_Mutation_Response>;
  /** update single row of the table: "session_tags" */
  update_session_tags_by_pk?: Maybe<Session_Tags>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "sessions_session_tags" */
  update_sessions_session_tags?: Maybe<Sessions_Session_Tags_Mutation_Response>;
  /** update single row of the table: "sessions_session_tags" */
  update_sessions_session_tags_by_pk?: Maybe<Sessions_Session_Tags>;
  /** update data of the table: "sessions_status" */
  update_sessions_status?: Maybe<Sessions_Status_Mutation_Response>;
  /** update single row of the table: "sessions_status" */
  update_sessions_status_by_pk?: Maybe<Sessions_Status>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Session_TagsArgs = {
  where: Session_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  slug: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Sessions_Session_TagsArgs = {
  where: Sessions_Session_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_Session_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Sessions_StatusArgs = {
  where: Sessions_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  auth_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Session_TagsArgs = {
  objects: Array<Session_Tags_Insert_Input>;
  on_conflict?: Maybe<Session_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_Tags_OneArgs = {
  object: Session_Tags_Insert_Input;
  on_conflict?: Maybe<Session_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_Session_TagsArgs = {
  objects: Array<Sessions_Session_Tags_Insert_Input>;
  on_conflict?: Maybe<Sessions_Session_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_Session_Tags_OneArgs = {
  object: Sessions_Session_Tags_Insert_Input;
  on_conflict?: Maybe<Sessions_Session_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_StatusArgs = {
  objects: Array<Sessions_Status_Insert_Input>;
  on_conflict?: Maybe<Sessions_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_Status_OneArgs = {
  object: Sessions_Status_Insert_Input;
  on_conflict?: Maybe<Sessions_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Session_TagsArgs = {
  _inc?: Maybe<Session_Tags_Inc_Input>;
  _set?: Maybe<Session_Tags_Set_Input>;
  where: Session_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Tags_By_PkArgs = {
  _inc?: Maybe<Session_Tags_Inc_Input>;
  _set?: Maybe<Session_Tags_Set_Input>;
  pk_columns: Session_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_Session_TagsArgs = {
  _inc?: Maybe<Sessions_Session_Tags_Inc_Input>;
  _set?: Maybe<Sessions_Session_Tags_Set_Input>;
  where: Sessions_Session_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_Session_Tags_By_PkArgs = {
  _inc?: Maybe<Sessions_Session_Tags_Inc_Input>;
  _set?: Maybe<Sessions_Session_Tags_Set_Input>;
  pk_columns: Sessions_Session_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_StatusArgs = {
  _set?: Maybe<Sessions_Status_Set_Input>;
  where: Sessions_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_Status_By_PkArgs = {
  _set?: Maybe<Sessions_Status_Set_Input>;
  pk_columns: Sessions_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "session_tags" */
  session_tags: Array<Session_Tags>;
  /** fetch aggregated fields from the table: "session_tags" */
  session_tags_aggregate: Session_Tags_Aggregate;
  /** fetch data from the table: "session_tags" using primary key columns */
  session_tags_by_pk?: Maybe<Session_Tags>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** An array relationship */
  sessions_session_tags: Array<Sessions_Session_Tags>;
  /** An aggregate relationship */
  sessions_session_tags_aggregate: Sessions_Session_Tags_Aggregate;
  /** fetch data from the table: "sessions_session_tags" using primary key columns */
  sessions_session_tags_by_pk?: Maybe<Sessions_Session_Tags>;
  /** fetch data from the table: "sessions_status" */
  sessions_status: Array<Sessions_Status>;
  /** fetch aggregated fields from the table: "sessions_status" */
  sessions_status_aggregate: Sessions_Status_Aggregate;
  /** fetch data from the table: "sessions_status" using primary key columns */
  sessions_status_by_pk?: Maybe<Sessions_Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootSession_TagsArgs = {
  distinct_on?: Maybe<Array<Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Tags_Order_By>>;
  where?: Maybe<Session_Tags_Bool_Exp>;
};


export type Query_RootSession_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Tags_Order_By>>;
  where?: Maybe<Session_Tags_Bool_Exp>;
};


export type Query_RootSession_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  slug: Scalars['String'];
};


export type Query_RootSessions_Session_TagsArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};


export type Query_RootSessions_Session_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};


export type Query_RootSessions_Session_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSessions_StatusArgs = {
  distinct_on?: Maybe<Array<Sessions_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Status_Order_By>>;
  where?: Maybe<Sessions_Status_Bool_Exp>;
};


export type Query_RootSessions_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Status_Order_By>>;
  where?: Maybe<Sessions_Status_Bool_Exp>;
};


export type Query_RootSessions_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  auth_id: Scalars['String'];
};

/** columns and relationships of "session_tags" */
export type Session_Tags = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  label: Scalars['String'];
  /** An array relationship */
  sessions_tags: Array<Sessions_Session_Tags>;
  /** An aggregate relationship */
  sessions_tags_aggregate: Sessions_Session_Tags_Aggregate;
  slug: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "session_tags" */
export type Session_TagsSessions_TagsArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};


/** columns and relationships of "session_tags" */
export type Session_TagsSessions_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};

/** aggregated selection of "session_tags" */
export type Session_Tags_Aggregate = {
  aggregate?: Maybe<Session_Tags_Aggregate_Fields>;
  nodes: Array<Session_Tags>;
};

/** aggregate fields of "session_tags" */
export type Session_Tags_Aggregate_Fields = {
  avg?: Maybe<Session_Tags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Session_Tags_Max_Fields>;
  min?: Maybe<Session_Tags_Min_Fields>;
  stddev?: Maybe<Session_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Session_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Session_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Session_Tags_Sum_Fields>;
  var_pop?: Maybe<Session_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Session_Tags_Var_Samp_Fields>;
  variance?: Maybe<Session_Tags_Variance_Fields>;
};


/** aggregate fields of "session_tags" */
export type Session_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Session_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Session_Tags_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "session_tags". All fields are combined with a logical 'AND'. */
export type Session_Tags_Bool_Exp = {
  _and?: Maybe<Array<Session_Tags_Bool_Exp>>;
  _not?: Maybe<Session_Tags_Bool_Exp>;
  _or?: Maybe<Array<Session_Tags_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  sessions_tags?: Maybe<Sessions_Session_Tags_Bool_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "session_tags" */
export enum Session_Tags_Constraint {
  /** unique or primary key constraint */
  SessionTagsPkey = 'session_tags_pkey',
  /** unique or primary key constraint */
  SessionTagsSlugKey = 'session_tags_slug_key'
}

/** input type for incrementing numeric columns in table "session_tags" */
export type Session_Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "session_tags" */
export type Session_Tags_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  sessions_tags?: Maybe<Sessions_Session_Tags_Arr_Rel_Insert_Input>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Session_Tags_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Session_Tags_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "session_tags" */
export type Session_Tags_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session_Tags>;
};

/** input type for inserting object relation for remote table "session_tags" */
export type Session_Tags_Obj_Rel_Insert_Input = {
  data: Session_Tags_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Session_Tags_On_Conflict>;
};

/** on conflict condition type for table "session_tags" */
export type Session_Tags_On_Conflict = {
  constraint: Session_Tags_Constraint;
  update_columns?: Array<Session_Tags_Update_Column>;
  where?: Maybe<Session_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "session_tags". */
export type Session_Tags_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  sessions_tags_aggregate?: Maybe<Sessions_Session_Tags_Aggregate_Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: session_tags */
export type Session_Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "session_tags" */
export enum Session_Tags_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "session_tags" */
export type Session_Tags_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Session_Tags_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Session_Tags_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Session_Tags_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Session_Tags_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "session_tags" */
export enum Session_Tags_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Session_Tags_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Session_Tags_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Session_Tags_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  /** An object relationship */
  author?: Maybe<Users>;
  author_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  ended_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An array relationship */
  sessions_session_tags: Array<Sessions_Session_Tags>;
  /** An aggregate relationship */
  sessions_session_tags_aggregate: Sessions_Session_Tags_Aggregate;
  slug: Scalars['String'];
  started_at: Scalars['timestamp'];
  status: Sessions_Status_Enum;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "sessions" */
export type SessionsSessions_Session_TagsArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};


/** columns and relationships of "sessions" */
export type SessionsSessions_Session_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  avg?: Maybe<Sessions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
  stddev?: Maybe<Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Sum_Fields>;
  var_pop?: Maybe<Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Variance_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  avg?: Maybe<Sessions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sessions_Max_Order_By>;
  min?: Maybe<Sessions_Min_Order_By>;
  stddev?: Maybe<Sessions_Stddev_Order_By>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Order_By>;
  sum?: Maybe<Sessions_Sum_Order_By>;
  var_pop?: Maybe<Sessions_Var_Pop_Order_By>;
  var_samp?: Maybe<Sessions_Var_Samp_Order_By>;
  variance?: Maybe<Sessions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** aggregate avg on columns */
export type Sessions_Avg_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sessions" */
export type Sessions_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Bool_Exp>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Bool_Exp>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  ended_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sessions_session_tags?: Maybe<Sessions_Session_Tags_Bool_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  started_at?: Maybe<Timestamp_Comparison_Exp>;
  status?: Maybe<Sessions_Status_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsIdKey = 'sessions_id_key',
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey',
  /** unique or primary key constraint */
  SessionsSlugKey = 'sessions_slug_key'
}

/** input type for incrementing numeric columns in table "sessions" */
export type Sessions_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sessions_session_tags?: Maybe<Sessions_Session_Tags_Arr_Rel_Insert_Input>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamp']>;
  status?: Maybe<Sessions_Status_Enum>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  ended_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  ended_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** input type for inserting object relation for remote table "sessions" */
export type Sessions_Obj_Rel_Insert_Input = {
  data: Sessions_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  ended_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sessions_session_tags_aggregate?: Maybe<Sessions_Session_Tags_Aggregate_Order_By>;
  slug?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  slug: Scalars['String'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/**
 * relation
 *
 *
 * columns and relationships of "sessions_session_tags"
 *
 */
export type Sessions_Session_Tags = {
  id: Scalars['Int'];
  /** An object relationship */
  session: Sessions;
  session_id: Scalars['Int'];
  /** An object relationship */
  session_tag: Session_Tags;
  tag_id: Scalars['Int'];
};

/** aggregated selection of "sessions_session_tags" */
export type Sessions_Session_Tags_Aggregate = {
  aggregate?: Maybe<Sessions_Session_Tags_Aggregate_Fields>;
  nodes: Array<Sessions_Session_Tags>;
};

/** aggregate fields of "sessions_session_tags" */
export type Sessions_Session_Tags_Aggregate_Fields = {
  avg?: Maybe<Sessions_Session_Tags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sessions_Session_Tags_Max_Fields>;
  min?: Maybe<Sessions_Session_Tags_Min_Fields>;
  stddev?: Maybe<Sessions_Session_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Session_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Session_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Session_Tags_Sum_Fields>;
  var_pop?: Maybe<Sessions_Session_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Session_Tags_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Session_Tags_Variance_Fields>;
};


/** aggregate fields of "sessions_session_tags" */
export type Sessions_Session_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions_session_tags" */
export type Sessions_Session_Tags_Aggregate_Order_By = {
  avg?: Maybe<Sessions_Session_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sessions_Session_Tags_Max_Order_By>;
  min?: Maybe<Sessions_Session_Tags_Min_Order_By>;
  stddev?: Maybe<Sessions_Session_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Sessions_Session_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sessions_Session_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Sessions_Session_Tags_Sum_Order_By>;
  var_pop?: Maybe<Sessions_Session_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Sessions_Session_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Sessions_Session_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sessions_session_tags" */
export type Sessions_Session_Tags_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Session_Tags_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Sessions_Session_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Sessions_Session_Tags_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sessions_session_tags". All fields are combined with a logical 'AND'. */
export type Sessions_Session_Tags_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Session_Tags_Bool_Exp>>;
  _not?: Maybe<Sessions_Session_Tags_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Session_Tags_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  session?: Maybe<Sessions_Bool_Exp>;
  session_id?: Maybe<Int_Comparison_Exp>;
  session_tag?: Maybe<Session_Tags_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions_session_tags" */
export enum Sessions_Session_Tags_Constraint {
  /** unique or primary key constraint */
  SessionsSessionTagsIdKey = 'sessions_session_tags_id_key',
  /** unique or primary key constraint */
  SessionsTagsPkey = 'sessions_tags_pkey'
}

/** input type for incrementing numeric columns in table "sessions_session_tags" */
export type Sessions_Session_Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sessions_session_tags" */
export type Sessions_Session_Tags_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  session?: Maybe<Sessions_Obj_Rel_Insert_Input>;
  session_id?: Maybe<Scalars['Int']>;
  session_tag?: Maybe<Session_Tags_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Sessions_Session_Tags_Max_Fields = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Max_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Session_Tags_Min_Fields = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Min_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "sessions_session_tags" */
export type Sessions_Session_Tags_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions_Session_Tags>;
};

/** on conflict condition type for table "sessions_session_tags" */
export type Sessions_Session_Tags_On_Conflict = {
  constraint: Sessions_Session_Tags_Constraint;
  update_columns?: Array<Sessions_Session_Tags_Update_Column>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions_session_tags". */
export type Sessions_Session_Tags_Order_By = {
  id?: Maybe<Order_By>;
  session?: Maybe<Sessions_Order_By>;
  session_id?: Maybe<Order_By>;
  session_tag?: Maybe<Session_Tags_Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions_session_tags */
export type Sessions_Session_Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sessions_session_tags" */
export enum Sessions_Session_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "sessions_session_tags" */
export type Sessions_Session_Tags_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Sessions_Session_Tags_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Session_Tags_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Session_Tags_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sessions_Session_Tags_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** update columns of table "sessions_session_tags" */
export enum Sessions_Session_Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  TagId = 'tag_id'
}

/** aggregate var_pop on columns */
export type Sessions_Session_Tags_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sessions_Session_Tags_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sessions_Session_Tags_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  session_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sessions_session_tags" */
export type Sessions_Session_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamp']>;
  status?: Maybe<Sessions_Status_Enum>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/**
 * Enum
 *
 *
 * columns and relationships of "sessions_status"
 *
 */
export type Sessions_Status = {
  value: Scalars['String'];
};

/** aggregated selection of "sessions_status" */
export type Sessions_Status_Aggregate = {
  aggregate?: Maybe<Sessions_Status_Aggregate_Fields>;
  nodes: Array<Sessions_Status>;
};

/** aggregate fields of "sessions_status" */
export type Sessions_Status_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Sessions_Status_Max_Fields>;
  min?: Maybe<Sessions_Status_Min_Fields>;
};


/** aggregate fields of "sessions_status" */
export type Sessions_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "sessions_status". All fields are combined with a logical 'AND'. */
export type Sessions_Status_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Status_Bool_Exp>>;
  _not?: Maybe<Sessions_Status_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions_status" */
export enum Sessions_Status_Constraint {
  /** unique or primary key constraint */
  SessionsStatusPkey = 'sessions_status_pkey'
}

export enum Sessions_Status_Enum {
  Draft = 'DRAFT',
  Private = 'PRIVATE',
  Published = 'PUBLISHED'
}

/** Boolean expression to compare columns of type "sessions_status_enum". All fields are combined with logical 'AND'. */
export type Sessions_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Sessions_Status_Enum>;
  _in?: Maybe<Array<Sessions_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Sessions_Status_Enum>;
  _nin?: Maybe<Array<Sessions_Status_Enum>>;
};

/** input type for inserting data into table "sessions_status" */
export type Sessions_Status_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sessions_Status_Max_Fields = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Sessions_Status_Min_Fields = {
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "sessions_status" */
export type Sessions_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions_Status>;
};

/** on conflict condition type for table "sessions_status" */
export type Sessions_Status_On_Conflict = {
  constraint: Sessions_Status_Constraint;
  update_columns?: Array<Sessions_Status_Update_Column>;
  where?: Maybe<Sessions_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions_status". */
export type Sessions_Status_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions_status */
export type Sessions_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "sessions_status" */
export enum Sessions_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "sessions_status" */
export type Sessions_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "sessions_status" */
export enum Sessions_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Sessions_Stddev_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sessions" */
export type Sessions_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Stddev_Pop_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sessions" */
export type Sessions_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Stddev_Samp_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sessions" */
export type Sessions_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sessions_Sum_Fields = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sessions" */
export type Sessions_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Sessions_Var_Pop_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sessions" */
export type Sessions_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sessions_Var_Samp_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sessions" */
export type Sessions_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sessions_Variance_Fields = {
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sessions" */
export type Sessions_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  /** fetch data from the table: "session_tags" */
  session_tags: Array<Session_Tags>;
  /** fetch aggregated fields from the table: "session_tags" */
  session_tags_aggregate: Session_Tags_Aggregate;
  /** fetch data from the table: "session_tags" using primary key columns */
  session_tags_by_pk?: Maybe<Session_Tags>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** An array relationship */
  sessions_session_tags: Array<Sessions_Session_Tags>;
  /** An aggregate relationship */
  sessions_session_tags_aggregate: Sessions_Session_Tags_Aggregate;
  /** fetch data from the table: "sessions_session_tags" using primary key columns */
  sessions_session_tags_by_pk?: Maybe<Sessions_Session_Tags>;
  /** fetch data from the table: "sessions_status" */
  sessions_status: Array<Sessions_Status>;
  /** fetch aggregated fields from the table: "sessions_status" */
  sessions_status_aggregate: Sessions_Status_Aggregate;
  /** fetch data from the table: "sessions_status" using primary key columns */
  sessions_status_by_pk?: Maybe<Sessions_Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootSession_TagsArgs = {
  distinct_on?: Maybe<Array<Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Tags_Order_By>>;
  where?: Maybe<Session_Tags_Bool_Exp>;
};


export type Subscription_RootSession_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Tags_Order_By>>;
  where?: Maybe<Session_Tags_Bool_Exp>;
};


export type Subscription_RootSession_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  slug: Scalars['String'];
};


export type Subscription_RootSessions_Session_TagsArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};


export type Subscription_RootSessions_Session_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Session_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Session_Tags_Order_By>>;
  where?: Maybe<Sessions_Session_Tags_Bool_Exp>;
};


export type Subscription_RootSessions_Session_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSessions_StatusArgs = {
  distinct_on?: Maybe<Array<Sessions_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Status_Order_By>>;
  where?: Maybe<Sessions_Status_Bool_Exp>;
};


export type Subscription_RootSessions_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Status_Order_By>>;
  where?: Maybe<Sessions_Status_Bool_Exp>;
};


export type Subscription_RootSessions_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  auth_id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  auth_id: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  user_name: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  auth_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sessions?: Maybe<Sessions_Bool_Exp>;
  user_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersAuthIdKey = 'users_auth_id_key',
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUserNameKey = 'users_user_name_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<Sessions_Arr_Rel_Insert_Input>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  auth_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sessions_aggregate?: Maybe<Sessions_Aggregate_Order_By>;
  user_name?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  auth_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserName = 'user_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AuthId = 'auth_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserName = 'user_name'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};
