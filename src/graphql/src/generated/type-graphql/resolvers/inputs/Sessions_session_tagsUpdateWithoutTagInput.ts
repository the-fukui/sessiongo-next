import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsUpdateOneRequiredWithoutTagsInput } from "../inputs/SessionsUpdateOneRequiredWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => SessionsUpdateOneRequiredWithoutTagsInput, {
    nullable: true
  })
  session?: SessionsUpdateOneRequiredWithoutTagsInput | undefined;
}
