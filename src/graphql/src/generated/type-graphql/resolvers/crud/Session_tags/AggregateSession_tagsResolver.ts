import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSession_tagsArgs } from "./args/AggregateSession_tagsArgs";
import { Session_tags } from "../../../models/Session_tags";
import { AggregateSession_tags } from "../../outputs/AggregateSession_tags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session_tags)
export class AggregateSession_tagsResolver {
  @TypeGraphQL.Query(_returns => AggregateSession_tags, {
    nullable: false
  })
  async aggregateSession_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSession_tagsArgs): Promise<AggregateSession_tags> {
    return getPrismaFromContext(ctx).session_tags.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
