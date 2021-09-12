import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsUpdateOneRequiredWithoutSessionsInput } from "../inputs/Session_tagsUpdateOneRequiredWithoutSessionsInput";
import { SessionsUpdateOneRequiredWithoutTagsInput } from "../inputs/SessionsUpdateOneRequiredWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsUpdateInput {
  @TypeGraphQL.Field(_type => SessionsUpdateOneRequiredWithoutTagsInput, {
    nullable: true
  })
  session?: SessionsUpdateOneRequiredWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsUpdateOneRequiredWithoutSessionsInput, {
    nullable: true
  })
  tag?: Session_tagsUpdateOneRequiredWithoutSessionsInput | undefined;
}
