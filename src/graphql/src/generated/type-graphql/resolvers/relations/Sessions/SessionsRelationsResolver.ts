import * as TypeGraphQL from "type-graphql";
import { Sessions } from "../../../models/Sessions";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { Users } from "../../../models/Users";
import { SessionsTagsArgs } from "./args/SessionsTagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sessions)
export class SessionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() sessions: Sessions, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).sessions.findUnique({
      where: {
        id: sessions.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [Sessions_session_tags], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() sessions: Sessions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SessionsTagsArgs): Promise<Sessions_session_tags[]> {
    return getPrismaFromContext(ctx).sessions.findUnique({
      where: {
        id: sessions.id,
      },
    }).tags(args);
  }
}
