import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsCreateManyInput } from "../../../inputs/SessionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySessionsArgs {
  @TypeGraphQL.Field(_type => [SessionsCreateManyInput], {
    nullable: false
  })
  data!: SessionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
