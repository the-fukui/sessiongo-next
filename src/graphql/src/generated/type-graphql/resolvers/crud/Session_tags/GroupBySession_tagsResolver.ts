import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySession_tagsArgs } from "./args/GroupBySession_tagsArgs";
import { Session_tags } from "../../../models/Session_tags";
import { Session_tagsGroupBy } from "../../outputs/Session_tagsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session_tags)
export class GroupBySession_tagsResolver {
  @TypeGraphQL.Query(_returns => [Session_tagsGroupBy], {
    nullable: false
  })
  async groupBySession_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySession_tagsArgs): Promise<Session_tagsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).session_tags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
