import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateManyAuthorInputEnvelope } from "../inputs/SessionsCreateManyAuthorInputEnvelope";
import { SessionsCreateOrConnectWithoutAuthorInput } from "../inputs/SessionsCreateOrConnectWithoutAuthorInput";
import { SessionsCreateWithoutAuthorInput } from "../inputs/SessionsCreateWithoutAuthorInput";
import { SessionsScalarWhereInput } from "../inputs/SessionsScalarWhereInput";
import { SessionsUpdateManyWithWhereWithoutAuthorInput } from "../inputs/SessionsUpdateManyWithWhereWithoutAuthorInput";
import { SessionsUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/SessionsUpdateWithWhereUniqueWithoutAuthorInput";
import { SessionsUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/SessionsUpsertWithWhereUniqueWithoutAuthorInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SessionsCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: SessionsCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: SessionsCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: SessionsUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionsCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: SessionsCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereUniqueInput], {
    nullable: true
  })
  connect?: SessionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereUniqueInput], {
    nullable: true
  })
  set?: SessionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SessionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereUniqueInput], {
    nullable: true
  })
  delete?: SessionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: SessionsUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: SessionsUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SessionsScalarWhereInput[] | undefined;
}
