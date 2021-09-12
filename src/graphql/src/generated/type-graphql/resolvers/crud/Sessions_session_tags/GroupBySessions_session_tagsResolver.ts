import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySessions_session_tagsArgs } from "./args/GroupBySessions_session_tagsArgs";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { Sessions_session_tagsGroupBy } from "../../outputs/Sessions_session_tagsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sessions_session_tags)
export class GroupBySessions_session_tagsResolver {
  @TypeGraphQL.Query(_returns => [Sessions_session_tagsGroupBy], {
    nullable: false
  })
  async groupBySessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySessions_session_tagsArgs): Promise<Sessions_session_tagsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
