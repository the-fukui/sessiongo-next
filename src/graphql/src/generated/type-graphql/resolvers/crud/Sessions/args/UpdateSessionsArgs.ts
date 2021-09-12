import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsUncheckedUpdateInput } from "../../../inputs/SessionsUncheckedUpdateInput";
import { SessionsWhereUniqueInput } from "../../../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSessionsArgs {
  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateInput, {
    nullable: false
  })
  data!: SessionsUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: false
  })
  where!: SessionsWhereUniqueInput;
}
