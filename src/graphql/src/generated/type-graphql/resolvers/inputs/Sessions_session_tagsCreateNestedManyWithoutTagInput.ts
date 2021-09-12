import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsCreateManyTagInputEnvelope } from "../inputs/Sessions_session_tagsCreateManyTagInputEnvelope";
import { Sessions_session_tagsCreateOrConnectWithoutTagInput } from "../inputs/Sessions_session_tagsCreateOrConnectWithoutTagInput";
import { Sessions_session_tagsCreateWithoutTagInput } from "../inputs/Sessions_session_tagsCreateWithoutTagInput";
import { Sessions_session_tagsWhereUniqueInput } from "../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateWithoutTagInput], {
    nullable: true
  })
  create?: Sessions_session_tagsCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Sessions_session_tagsCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Sessions_session_tagsCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereUniqueInput], {
    nullable: true
  })
  connect?: Sessions_session_tagsWhereUniqueInput[] | undefined;
}
