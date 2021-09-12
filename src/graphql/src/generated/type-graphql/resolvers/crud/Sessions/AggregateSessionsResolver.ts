import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSessionsArgs } from "./args/AggregateSessionsArgs";
import { Sessions } from "../../../models/Sessions";
import { AggregateSessions } from "../../outputs/AggregateSessions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sessions)
export class AggregateSessionsResolver {
  @TypeGraphQL.Query(_returns => AggregateSessions, {
    nullable: false
  })
  async aggregateSessions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSessionsArgs): Promise<AggregateSessions> {
    return getPrismaFromContext(ctx).sessions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
