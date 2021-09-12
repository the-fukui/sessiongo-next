import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateManyAuthorInputEnvelope } from "../inputs/SessionsCreateManyAuthorInputEnvelope";
import { SessionsCreateOrConnectWithoutAuthorInput } from "../inputs/SessionsCreateOrConnectWithoutAuthorInput";
import { SessionsCreateWithoutAuthorInput } from "../inputs/SessionsCreateWithoutAuthorInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsUncheckedCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SessionsCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: SessionsCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: SessionsCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionsCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: SessionsCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereUniqueInput], {
    nullable: true
  })
  connect?: SessionsWhereUniqueInput[] | undefined;
}
