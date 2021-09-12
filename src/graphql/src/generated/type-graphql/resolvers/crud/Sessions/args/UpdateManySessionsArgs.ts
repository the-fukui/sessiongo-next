import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsUncheckedUpdateManyInput } from "../../../inputs/SessionsUncheckedUpdateManyInput";
import { SessionsWhereInput } from "../../../inputs/SessionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySessionsArgs {
  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: SessionsUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  where?: SessionsWhereInput | undefined;
}
