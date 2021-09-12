import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsCreateManyTagInputEnvelope } from "../inputs/Sessions_session_tagsCreateManyTagInputEnvelope";
import { Sessions_session_tagsCreateOrConnectWithoutTagInput } from "../inputs/Sessions_session_tagsCreateOrConnectWithoutTagInput";
import { Sessions_session_tagsCreateWithoutTagInput } from "../inputs/Sessions_session_tagsCreateWithoutTagInput";
import { Sessions_session_tagsScalarWhereInput } from "../inputs/Sessions_session_tagsScalarWhereInput";
import { Sessions_session_tagsUpdateManyWithWhereWithoutTagInput } from "../inputs/Sessions_session_tagsUpdateManyWithWhereWithoutTagInput";
import { Sessions_session_tagsUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Sessions_session_tagsUpdateWithWhereUniqueWithoutTagInput";
import { Sessions_session_tagsUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Sessions_session_tagsUpsertWithWhereUniqueWithoutTagInput";
import { Sessions_session_tagsWhereUniqueInput } from "../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsUpdateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateWithoutTagInput], {
    nullable: true
  })
  create?: Sessions_session_tagsCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Sessions_session_tagsCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Sessions_session_tagsUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Sessions_session_tagsCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereUniqueInput], {
    nullable: true
  })
  connect?: Sessions_session_tagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereUniqueInput], {
    nullable: true
  })
  set?: Sessions_session_tagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Sessions_session_tagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereUniqueInput], {
    nullable: true
  })
  delete?: Sessions_session_tagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Sessions_session_tagsUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Sessions_session_tagsUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Sessions_session_tagsScalarWhereInput[] | undefined;
}
