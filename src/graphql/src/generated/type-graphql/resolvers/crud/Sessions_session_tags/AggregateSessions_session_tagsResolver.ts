import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSessions_session_tagsArgs } from "./args/AggregateSessions_session_tagsArgs";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { AggregateSessions_session_tags } from "../../outputs/AggregateSessions_session_tags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sessions_session_tags)
export class AggregateSessions_session_tagsResolver {
  @TypeGraphQL.Query(_returns => AggregateSessions_session_tags, {
    nullable: false
  })
  async aggregateSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSessions_session_tagsArgs): Promise<AggregateSessions_session_tags> {
    return getPrismaFromContext(ctx).sessions_session_tags.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
