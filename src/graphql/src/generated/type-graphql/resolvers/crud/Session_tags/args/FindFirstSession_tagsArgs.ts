import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsOrderByWithRelationInput } from "../../../inputs/Session_tagsOrderByWithRelationInput";
import { Session_tagsWhereInput } from "../../../inputs/Session_tagsWhereInput";
import { Session_tagsWhereUniqueInput } from "../../../inputs/Session_tagsWhereUniqueInput";
import { Session_tagsScalarFieldEnum } from "../../../../enums/Session_tagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsWhereInput, {
    nullable: true
  })
  where?: Session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Session_tagsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Session_tagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "slug" | "created_at" | "updated_at" | "label"> | undefined;
}
