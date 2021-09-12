import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsScalarWhereInput } from "../inputs/Sessions_session_tagsScalarWhereInput";
import { Sessions_session_tagsUncheckedUpdateManyWithoutSessionsInput } from "../inputs/Sessions_session_tagsUncheckedUpdateManyWithoutSessionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => Sessions_session_tagsScalarWhereInput, {
    nullable: false
  })
  where!: Sessions_session_tagsScalarWhereInput;

  @TypeGraphQL.Field(_type => Sessions_session_tagsUncheckedUpdateManyWithoutSessionsInput, {
    nullable: false
  })
  data!: Sessions_session_tagsUncheckedUpdateManyWithoutSessionsInput;
}
