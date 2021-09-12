import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateOrConnectWithoutTagsInput } from "../inputs/SessionsCreateOrConnectWithoutTagsInput";
import { SessionsUncheckedCreateWithoutTagsInput } from "../inputs/SessionsUncheckedCreateWithoutTagsInput";
import { SessionsUncheckedUpdateWithoutTagsInput } from "../inputs/SessionsUncheckedUpdateWithoutTagsInput";
import { SessionsUpsertWithoutTagsInput } from "../inputs/SessionsUpsertWithoutTagsInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsUpdateOneRequiredWithoutTagsInput {
  @TypeGraphQL.Field(_type => SessionsUncheckedCreateWithoutTagsInput, {
    nullable: true
  })
  create?: SessionsUncheckedCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SessionsCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: SessionsCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SessionsUpsertWithoutTagsInput, {
    nullable: true
  })
  upsert?: SessionsUpsertWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateWithoutTagsInput, {
    nullable: true
  })
  update?: SessionsUncheckedUpdateWithoutTagsInput | undefined;
}
