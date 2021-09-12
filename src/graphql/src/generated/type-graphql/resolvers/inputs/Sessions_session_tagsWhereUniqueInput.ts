import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { sessions_session_tagsSession_idTag_idCompoundUniqueInput } from "../inputs/sessions_session_tagsSession_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsWhereUniqueInput {
  @TypeGraphQL.Field(_type => sessions_session_tagsSession_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  session_id_tag_id?: sessions_session_tagsSession_idTag_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => sessions_session_tagsSession_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  session_id_tag_id?: sessions_session_tagsSession_idTag_idCompoundUniqueInput | undefined;
}
