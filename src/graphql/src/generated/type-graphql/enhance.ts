import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Sessions: crudResolvers.SessionsCrudResolver,
  Users: crudResolvers.UsersCrudResolver,
  Session_tags: crudResolvers.Session_tagsCrudResolver,
  Sessions_session_tags: crudResolvers.Sessions_session_tagsCrudResolver
};
const relationResolversMap = {
  Sessions: relationResolvers.SessionsRelationsResolver,
  Users: relationResolvers.UsersRelationsResolver,
  Session_tags: relationResolvers.Session_tagsRelationsResolver,
  Sessions_session_tags: relationResolvers.Sessions_session_tagsRelationsResolver
};
const actionResolversMap = {
  Sessions: {
    findUniqueSessions: actionResolvers.FindUniqueSessionsResolver,
    findFirstSessions: actionResolvers.FindFirstSessionsResolver,
    findManySessions: actionResolvers.FindManySessionsResolver,
    createSessions: actionResolvers.CreateSessionsResolver,
    createManySessions: actionResolvers.CreateManySessionsResolver,
    deleteSessions: actionResolvers.DeleteSessionsResolver,
    updateSessions: actionResolvers.UpdateSessionsResolver,
    deleteManySessions: actionResolvers.DeleteManySessionsResolver,
    updateManySessions: actionResolvers.UpdateManySessionsResolver,
    upsertSessions: actionResolvers.UpsertSessionsResolver,
    aggregateSessions: actionResolvers.AggregateSessionsResolver,
    groupBySessions: actionResolvers.GroupBySessionsResolver
  },
  Users: {
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    createUsers: actionResolvers.CreateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    deleteUsers: actionResolvers.DeleteUsersResolver,
    updateUsers: actionResolvers.UpdateUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    upsertUsers: actionResolvers.UpsertUsersResolver,
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver
  },
  Session_tags: {
    findUniqueSession_tags: actionResolvers.FindUniqueSession_tagsResolver,
    findFirstSession_tags: actionResolvers.FindFirstSession_tagsResolver,
    findManySession_tags: actionResolvers.FindManySession_tagsResolver,
    createSession_tags: actionResolvers.CreateSession_tagsResolver,
    createManySession_tags: actionResolvers.CreateManySession_tagsResolver,
    deleteSession_tags: actionResolvers.DeleteSession_tagsResolver,
    updateSession_tags: actionResolvers.UpdateSession_tagsResolver,
    deleteManySession_tags: actionResolvers.DeleteManySession_tagsResolver,
    updateManySession_tags: actionResolvers.UpdateManySession_tagsResolver,
    upsertSession_tags: actionResolvers.UpsertSession_tagsResolver,
    aggregateSession_tags: actionResolvers.AggregateSession_tagsResolver,
    groupBySession_tags: actionResolvers.GroupBySession_tagsResolver
  },
  Sessions_session_tags: {
    findUniqueSessions_session_tags: actionResolvers.FindUniqueSessions_session_tagsResolver,
    findFirstSessions_session_tags: actionResolvers.FindFirstSessions_session_tagsResolver,
    findManySessions_session_tags: actionResolvers.FindManySessions_session_tagsResolver,
    createSessions_session_tags: actionResolvers.CreateSessions_session_tagsResolver,
    createManySessions_session_tags: actionResolvers.CreateManySessions_session_tagsResolver,
    deleteSessions_session_tags: actionResolvers.DeleteSessions_session_tagsResolver,
    updateSessions_session_tags: actionResolvers.UpdateSessions_session_tagsResolver,
    deleteManySessions_session_tags: actionResolvers.DeleteManySessions_session_tagsResolver,
    updateManySessions_session_tags: actionResolvers.UpdateManySessions_session_tagsResolver,
    upsertSessions_session_tags: actionResolvers.UpsertSessions_session_tagsResolver,
    aggregateSessions_session_tags: actionResolvers.AggregateSessions_session_tagsResolver,
    groupBySessions_session_tags: actionResolvers.GroupBySessions_session_tagsResolver
  }
};
const resolversInfo = {
  Sessions: ["findUniqueSessions", "findFirstSessions", "findManySessions", "createSessions", "createManySessions", "deleteSessions", "updateSessions", "deleteManySessions", "updateManySessions", "upsertSessions", "aggregateSessions", "groupBySessions"],
  Users: ["findUniqueUsers", "findFirstUsers", "findManyUsers", "createUsers", "createManyUsers", "deleteUsers", "updateUsers", "deleteManyUsers", "updateManyUsers", "upsertUsers", "aggregateUsers", "groupByUsers"],
  Session_tags: ["findUniqueSession_tags", "findFirstSession_tags", "findManySession_tags", "createSession_tags", "createManySession_tags", "deleteSession_tags", "updateSession_tags", "deleteManySession_tags", "updateManySession_tags", "upsertSession_tags", "aggregateSession_tags", "groupBySession_tags"],
  Sessions_session_tags: ["findUniqueSessions_session_tags", "findFirstSessions_session_tags", "findManySessions_session_tags", "createSessions_session_tags", "createManySessions_session_tags", "deleteSessions_session_tags", "updateSessions_session_tags", "deleteManySessions_session_tags", "updateManySessions_session_tags", "upsertSessions_session_tags", "aggregateSessions_session_tags", "groupBySessions_session_tags"]
};
const relationResolversInfo = {
  Sessions: ["author", "tags"],
  Users: ["sessions"],
  Session_tags: ["sessions"],
  Sessions_session_tags: ["session", "tag"]
};
const modelsInfo = {
  Sessions: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  Users: ["id", "auth_id", "user_name", "name"],
  Session_tags: ["id", "slug", "created_at", "updated_at", "label"],
  Sessions_session_tags: ["session_id", "tag_id"]
};
const inputsInfo = {
  SessionsWhereInput: ["AND", "OR", "NOT", "id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author", "author_id", "content", "tags"],
  SessionsOrderByWithRelationInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author", "author_id", "content", "tags"],
  SessionsWhereUniqueInput: ["id", "slug"],
  SessionsOrderByWithAggregationInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content", "_count", "_avg", "_max", "_min", "_sum"],
  SessionsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  UsersWhereInput: ["AND", "OR", "NOT", "id", "auth_id", "user_name", "name", "sessions"],
  UsersOrderByWithRelationInput: ["id", "auth_id", "user_name", "name", "sessions"],
  UsersWhereUniqueInput: ["id", "auth_id", "user_name"],
  UsersOrderByWithAggregationInput: ["id", "auth_id", "user_name", "name", "_count", "_avg", "_max", "_min", "_sum"],
  UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "auth_id", "user_name", "name"],
  Session_tagsWhereInput: ["AND", "OR", "NOT", "id", "slug", "created_at", "updated_at", "label", "sessions"],
  Session_tagsOrderByWithRelationInput: ["id", "slug", "created_at", "updated_at", "label", "sessions"],
  Session_tagsWhereUniqueInput: ["id", "slug"],
  Session_tagsOrderByWithAggregationInput: ["id", "slug", "created_at", "updated_at", "label", "_count", "_avg", "_max", "_min", "_sum"],
  Session_tagsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "slug", "created_at", "updated_at", "label"],
  Sessions_session_tagsWhereInput: ["AND", "OR", "NOT", "session", "session_id", "tag", "tag_id"],
  Sessions_session_tagsOrderByWithRelationInput: ["session", "session_id", "tag", "tag_id"],
  Sessions_session_tagsWhereUniqueInput: ["session_id_tag_id", "session_id_tag_id"],
  Sessions_session_tagsOrderByWithAggregationInput: ["session_id", "tag_id", "_count", "_avg", "_max", "_min", "_sum"],
  Sessions_session_tagsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "session_id", "tag_id"],
  SessionsCreateInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "author", "tags"],
  SessionsUncheckedCreateInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content", "tags"],
  SessionsUpdateInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "author", "tags"],
  SessionsUncheckedUpdateInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content", "tags"],
  SessionsCreateManyInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  SessionsUpdateManyMutationInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content"],
  SessionsUncheckedUpdateManyInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  UsersCreateInput: ["auth_id", "user_name", "name", "sessions"],
  UsersUncheckedCreateInput: ["id", "auth_id", "user_name", "name", "sessions"],
  UsersUpdateInput: ["auth_id", "user_name", "name", "sessions"],
  UsersUncheckedUpdateInput: ["id", "auth_id", "user_name", "name", "sessions"],
  UsersCreateManyInput: ["id", "auth_id", "user_name", "name"],
  UsersUpdateManyMutationInput: ["auth_id", "user_name", "name"],
  UsersUncheckedUpdateManyInput: ["id", "auth_id", "user_name", "name"],
  Session_tagsCreateInput: ["slug", "created_at", "updated_at", "label", "sessions"],
  Session_tagsUncheckedCreateInput: ["id", "slug", "created_at", "updated_at", "label", "sessions"],
  Session_tagsUpdateInput: ["slug", "created_at", "updated_at", "label", "sessions"],
  Session_tagsUncheckedUpdateInput: ["id", "slug", "created_at", "updated_at", "label", "sessions"],
  Session_tagsCreateManyInput: ["id", "slug", "created_at", "updated_at", "label"],
  Session_tagsUpdateManyMutationInput: ["slug", "created_at", "updated_at", "label"],
  Session_tagsUncheckedUpdateManyInput: ["id", "slug", "created_at", "updated_at", "label"],
  Sessions_session_tagsCreateInput: ["session", "tag"],
  Sessions_session_tagsUncheckedCreateInput: ["session_id", "tag_id"],
  Sessions_session_tagsUpdateInput: ["session", "tag"],
  Sessions_session_tagsUncheckedUpdateInput: ["session_id", "tag_id"],
  Sessions_session_tagsCreateManyInput: ["session_id", "tag_id"],
  Sessions_session_tagsUpdateManyMutationInput: [],
  Sessions_session_tagsUncheckedUpdateManyInput: ["session_id", "tag_id"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumstatusFilter: ["equals", "in", "notIn", "not"],
  UsersRelationFilter: ["is", "isNot"],
  Sessions_session_tagsListRelationFilter: ["every", "some", "none"],
  Sessions_session_tagsOrderByRelationAggregateInput: ["_count"],
  SessionsCountOrderByAggregateInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  SessionsAvgOrderByAggregateInput: ["id", "author_id"],
  SessionsMaxOrderByAggregateInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  SessionsMinOrderByAggregateInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  SessionsSumOrderByAggregateInput: ["id", "author_id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumstatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  SessionsListRelationFilter: ["every", "some", "none"],
  SessionsOrderByRelationAggregateInput: ["_count"],
  UsersCountOrderByAggregateInput: ["id", "auth_id", "user_name", "name"],
  UsersAvgOrderByAggregateInput: ["id"],
  UsersMaxOrderByAggregateInput: ["id", "auth_id", "user_name", "name"],
  UsersMinOrderByAggregateInput: ["id", "auth_id", "user_name", "name"],
  UsersSumOrderByAggregateInput: ["id"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  Session_tagsCountOrderByAggregateInput: ["id", "slug", "created_at", "updated_at", "label"],
  Session_tagsAvgOrderByAggregateInput: ["id"],
  Session_tagsMaxOrderByAggregateInput: ["id", "slug", "created_at", "updated_at", "label"],
  Session_tagsMinOrderByAggregateInput: ["id", "slug", "created_at", "updated_at", "label"],
  Session_tagsSumOrderByAggregateInput: ["id"],
  SessionsRelationFilter: ["is", "isNot"],
  Session_tagsRelationFilter: ["is", "isNot"],
  sessions_session_tagsSession_idTag_idCompoundUniqueInput: ["session_id", "tag_id"],
  Sessions_session_tagsCountOrderByAggregateInput: ["session_id", "tag_id"],
  Sessions_session_tagsAvgOrderByAggregateInput: ["session_id", "tag_id"],
  Sessions_session_tagsMaxOrderByAggregateInput: ["session_id", "tag_id"],
  Sessions_session_tagsMinOrderByAggregateInput: ["session_id", "tag_id"],
  Sessions_session_tagsSumOrderByAggregateInput: ["session_id", "tag_id"],
  UsersCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  Sessions_session_tagsCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
  Sessions_session_tagsUncheckedCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  EnumstatusFieldUpdateOperationsInput: ["set"],
  UsersUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  Sessions_session_tagsUpdateManyWithoutSessionInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  Sessions_session_tagsUncheckedUpdateManyWithoutSessionInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SessionsCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionsUncheckedCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  SessionsUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SessionsUncheckedUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  Sessions_session_tagsCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  Sessions_session_tagsUncheckedCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  Sessions_session_tagsUpdateManyWithoutTagInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  Sessions_session_tagsUncheckedUpdateManyWithoutTagInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SessionsCreateNestedOneWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  Session_tagsCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  SessionsUpdateOneRequiredWithoutTagsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  Session_tagsUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumstatusFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumstatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  UsersCreateWithoutSessionsInput: ["auth_id", "user_name", "name"],
  UsersUncheckedCreateWithoutSessionsInput: ["id", "auth_id", "user_name", "name"],
  UsersCreateOrConnectWithoutSessionsInput: ["where", "create"],
  Sessions_session_tagsCreateWithoutSessionInput: ["tag"],
  Sessions_session_tagsUncheckedCreateWithoutSessionInput: ["tag_id"],
  Sessions_session_tagsCreateOrConnectWithoutSessionInput: ["where", "create"],
  Sessions_session_tagsCreateManySessionInputEnvelope: ["data", "skipDuplicates"],
  UsersUpsertWithoutSessionsInput: ["update", "create"],
  UsersUpdateWithoutSessionsInput: ["auth_id", "user_name", "name"],
  UsersUncheckedUpdateWithoutSessionsInput: ["id", "auth_id", "user_name", "name"],
  Sessions_session_tagsUpsertWithWhereUniqueWithoutSessionInput: ["where", "update", "create"],
  Sessions_session_tagsUpdateWithWhereUniqueWithoutSessionInput: ["where", "data"],
  Sessions_session_tagsUpdateManyWithWhereWithoutSessionInput: ["where", "data"],
  Sessions_session_tagsScalarWhereInput: ["AND", "OR", "NOT", "session_id", "tag_id"],
  SessionsCreateWithoutAuthorInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "tags"],
  SessionsUncheckedCreateWithoutAuthorInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "tags"],
  SessionsCreateOrConnectWithoutAuthorInput: ["where", "create"],
  SessionsCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  SessionsUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  SessionsUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  SessionsUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  SessionsScalarWhereInput: ["AND", "OR", "NOT", "id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  Sessions_session_tagsCreateWithoutTagInput: ["session"],
  Sessions_session_tagsUncheckedCreateWithoutTagInput: ["session_id"],
  Sessions_session_tagsCreateOrConnectWithoutTagInput: ["where", "create"],
  Sessions_session_tagsCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  Sessions_session_tagsUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  Sessions_session_tagsUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  Sessions_session_tagsUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  SessionsCreateWithoutTagsInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "author"],
  SessionsUncheckedCreateWithoutTagsInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  SessionsCreateOrConnectWithoutTagsInput: ["where", "create"],
  Session_tagsCreateWithoutSessionsInput: ["slug", "created_at", "updated_at", "label"],
  Session_tagsUncheckedCreateWithoutSessionsInput: ["id", "slug", "created_at", "updated_at", "label"],
  Session_tagsCreateOrConnectWithoutSessionsInput: ["where", "create"],
  SessionsUpsertWithoutTagsInput: ["update", "create"],
  SessionsUpdateWithoutTagsInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "author"],
  SessionsUncheckedUpdateWithoutTagsInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  Session_tagsUpsertWithoutSessionsInput: ["update", "create"],
  Session_tagsUpdateWithoutSessionsInput: ["slug", "created_at", "updated_at", "label"],
  Session_tagsUncheckedUpdateWithoutSessionsInput: ["id", "slug", "created_at", "updated_at", "label"],
  Sessions_session_tagsCreateManySessionInput: ["tag_id"],
  Sessions_session_tagsUpdateWithoutSessionInput: ["tag"],
  Sessions_session_tagsUncheckedUpdateWithoutSessionInput: ["tag_id"],
  Sessions_session_tagsUncheckedUpdateManyWithoutTagsInput: ["tag_id"],
  SessionsCreateManyAuthorInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content"],
  SessionsUpdateWithoutAuthorInput: ["slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "tags"],
  SessionsUncheckedUpdateWithoutAuthorInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content", "tags"],
  SessionsUncheckedUpdateManyWithoutSessionsInput: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "content"],
  Sessions_session_tagsCreateManyTagInput: ["session_id"],
  Sessions_session_tagsUpdateWithoutTagInput: ["session"],
  Sessions_session_tagsUncheckedUpdateWithoutTagInput: ["session_id"],
  Sessions_session_tagsUncheckedUpdateManyWithoutSessionsInput: ["session_id"]
};
const outputsInfo = {
  AggregateSessions: ["_count", "_avg", "_sum", "_min", "_max"],
  SessionsGroupBy: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUsers: ["_count", "_avg", "_sum", "_min", "_max"],
  UsersGroupBy: ["id", "auth_id", "user_name", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession_tags: ["_count", "_avg", "_sum", "_min", "_max"],
  Session_tagsGroupBy: ["id", "slug", "created_at", "updated_at", "label", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSessions_session_tags: ["_count", "_avg", "_sum", "_min", "_max"],
  Sessions_session_tagsGroupBy: ["session_id", "tag_id", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  SessionsCount: ["tags"],
  SessionsCountAggregate: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content", "_all"],
  SessionsAvgAggregate: ["id", "author_id"],
  SessionsSumAggregate: ["id", "author_id"],
  SessionsMinAggregate: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  SessionsMaxAggregate: ["id", "slug", "created_at", "updated_at", "started_at", "ended_at", "status", "title", "author_id", "content"],
  UsersCount: ["sessions"],
  UsersCountAggregate: ["id", "auth_id", "user_name", "name", "_all"],
  UsersAvgAggregate: ["id"],
  UsersSumAggregate: ["id"],
  UsersMinAggregate: ["id", "auth_id", "user_name", "name"],
  UsersMaxAggregate: ["id", "auth_id", "user_name", "name"],
  Session_tagsCount: ["sessions"],
  Session_tagsCountAggregate: ["id", "slug", "created_at", "updated_at", "label", "_all"],
  Session_tagsAvgAggregate: ["id"],
  Session_tagsSumAggregate: ["id"],
  Session_tagsMinAggregate: ["id", "slug", "created_at", "updated_at", "label"],
  Session_tagsMaxAggregate: ["id", "slug", "created_at", "updated_at", "label"],
  Sessions_session_tagsCountAggregate: ["session_id", "tag_id", "_all"],
  Sessions_session_tagsAvgAggregate: ["session_id", "tag_id"],
  Sessions_session_tagsSumAggregate: ["session_id", "tag_id"],
  Sessions_session_tagsMinAggregate: ["session_id", "tag_id"],
  Sessions_session_tagsMaxAggregate: ["session_id", "tag_id"]
};
const argsInfo = {
  FindUniqueSessionsArgs: ["where"],
  FindFirstSessionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSessionsArgs: ["data"],
  CreateManySessionsArgs: ["data", "skipDuplicates"],
  DeleteSessionsArgs: ["where"],
  UpdateSessionsArgs: ["data", "where"],
  DeleteManySessionsArgs: ["where"],
  UpdateManySessionsArgs: ["data", "where"],
  UpsertSessionsArgs: ["where", "create", "update"],
  AggregateSessionsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySessionsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUsersArgs: ["where"],
  FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsersArgs: ["data"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  DeleteUsersArgs: ["where"],
  UpdateUsersArgs: ["data", "where"],
  DeleteManyUsersArgs: ["where"],
  UpdateManyUsersArgs: ["data", "where"],
  UpsertUsersArgs: ["where", "create", "update"],
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSession_tagsArgs: ["where"],
  FindFirstSession_tagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySession_tagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSession_tagsArgs: ["data"],
  CreateManySession_tagsArgs: ["data", "skipDuplicates"],
  DeleteSession_tagsArgs: ["where"],
  UpdateSession_tagsArgs: ["data", "where"],
  DeleteManySession_tagsArgs: ["where"],
  UpdateManySession_tagsArgs: ["data", "where"],
  UpsertSession_tagsArgs: ["where", "create", "update"],
  AggregateSession_tagsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySession_tagsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSessions_session_tagsArgs: ["where"],
  FindFirstSessions_session_tagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessions_session_tagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSessions_session_tagsArgs: ["data"],
  CreateManySessions_session_tagsArgs: ["data", "skipDuplicates"],
  DeleteSessions_session_tagsArgs: ["where"],
  UpdateSessions_session_tagsArgs: ["data", "where"],
  DeleteManySessions_session_tagsArgs: ["where"],
  UpdateManySessions_session_tagsArgs: ["data", "where"],
  UpsertSessions_session_tagsArgs: ["where", "create", "update"],
  AggregateSessions_session_tagsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySessions_session_tagsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







