import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsCreateOrConnectWithoutSessionsInput } from "../inputs/Session_tagsCreateOrConnectWithoutSessionsInput";
import { Session_tagsUncheckedCreateWithoutSessionsInput } from "../inputs/Session_tagsUncheckedCreateWithoutSessionsInput";
import { Session_tagsUncheckedUpdateWithoutSessionsInput } from "../inputs/Session_tagsUncheckedUpdateWithoutSessionsInput";
import { Session_tagsUpsertWithoutSessionsInput } from "../inputs/Session_tagsUpsertWithoutSessionsInput";
import { Session_tagsWhereUniqueInput } from "../inputs/Session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsUpdateOneRequiredWithoutSessionsInput {
  @TypeGraphQL.Field(_type => Session_tagsUncheckedCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: Session_tagsUncheckedCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: Session_tagsCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsUpsertWithoutSessionsInput, {
    nullable: true
  })
  upsert?: Session_tagsUpsertWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: true
  })
  connect?: Session_tagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsUncheckedUpdateWithoutSessionsInput, {
    nullable: true
  })
  update?: Session_tagsUncheckedUpdateWithoutSessionsInput | undefined;
}
