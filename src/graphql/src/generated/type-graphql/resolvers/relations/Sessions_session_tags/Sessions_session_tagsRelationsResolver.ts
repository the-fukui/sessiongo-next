import * as TypeGraphQL from "type-graphql";
import { Session_tags } from "../../../models/Session_tags";
import { Sessions } from "../../../models/Sessions";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sessions_session_tags)
export class Sessions_session_tagsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Sessions, {
    nullable: false
  })
  async session(@TypeGraphQL.Root() sessions_session_tags: Sessions_session_tags, @TypeGraphQL.Ctx() ctx: any): Promise<Sessions> {
    return getPrismaFromContext(ctx).sessions_session_tags.findUnique({
      where: {
        session_id_tag_id: {
          session_id: sessions_session_tags.session_id,
          tag_id: sessions_session_tags.tag_id,
        },
      },
    }).session({});
  }

  @TypeGraphQL.FieldResolver(_type => Session_tags, {
    nullable: false
  })
  async tag(@TypeGraphQL.Root() sessions_session_tags: Sessions_session_tags, @TypeGraphQL.Ctx() ctx: any): Promise<Session_tags> {
    return getPrismaFromContext(ctx).sessions_session_tags.findUnique({
      where: {
        session_id_tag_id: {
          session_id: sessions_session_tags.session_id,
          tag_id: sessions_session_tags.tag_id,
        },
      },
    }).tag({});
  }
}
