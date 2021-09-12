import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsCreateManyTagInput } from "../inputs/Sessions_session_tagsCreateManyTagInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateManyTagInput], {
    nullable: false
  })
  data!: Sessions_session_tagsCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
