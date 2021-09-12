import * as TypeGraphQL from "type-graphql";
import { Sessions } from "../../../models/Sessions";
import { Users } from "../../../models/Users";
import { UsersSessionsArgs } from "./args/UsersSessionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Sessions], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersSessionsArgs): Promise<Sessions[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).sessions(args);
  }
}
