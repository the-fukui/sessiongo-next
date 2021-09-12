import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsCreateManySessionInputEnvelope } from "../inputs/Sessions_session_tagsCreateManySessionInputEnvelope";
import { Sessions_session_tagsCreateOrConnectWithoutSessionInput } from "../inputs/Sessions_session_tagsCreateOrConnectWithoutSessionInput";
import { Sessions_session_tagsCreateWithoutSessionInput } from "../inputs/Sessions_session_tagsCreateWithoutSessionInput";
import { Sessions_session_tagsWhereUniqueInput } from "../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsUncheckedCreateNestedManyWithoutSessionInput {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateWithoutSessionInput], {
    nullable: true
  })
  create?: Sessions_session_tagsCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: Sessions_session_tagsCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: Sessions_session_tagsCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereUniqueInput], {
    nullable: true
  })
  connect?: Sessions_session_tagsWhereUniqueInput[] | undefined;
}
