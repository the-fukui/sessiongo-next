import * as TypeGraphQL from "type-graphql";
import { Session_tags } from "../../../models/Session_tags";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { Session_tagsSessionsArgs } from "./args/Session_tagsSessionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session_tags)
export class Session_tagsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Sessions_session_tags], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Root() session_tags: Session_tags, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Session_tagsSessionsArgs): Promise<Sessions_session_tags[]> {
    return getPrismaFromContext(ctx).session_tags.findUnique({
      where: {
        id: session_tags.id,
      },
    }).sessions(args);
  }
}
