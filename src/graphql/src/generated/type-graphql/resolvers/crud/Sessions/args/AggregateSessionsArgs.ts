import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsOrderByWithRelationInput } from "../../../inputs/SessionsOrderByWithRelationInput";
import { SessionsWhereInput } from "../../../inputs/SessionsWhereInput";
import { SessionsWhereUniqueInput } from "../../../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSessionsArgs {
  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  where?: SessionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SessionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SessionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SessionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
