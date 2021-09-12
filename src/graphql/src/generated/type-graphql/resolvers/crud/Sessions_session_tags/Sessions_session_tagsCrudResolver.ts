import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSessions_session_tagsArgs } from "./args/AggregateSessions_session_tagsArgs";
import { CreateManySessions_session_tagsArgs } from "./args/CreateManySessions_session_tagsArgs";
import { CreateSessions_session_tagsArgs } from "./args/CreateSessions_session_tagsArgs";
import { DeleteManySessions_session_tagsArgs } from "./args/DeleteManySessions_session_tagsArgs";
import { DeleteSessions_session_tagsArgs } from "./args/DeleteSessions_session_tagsArgs";
import { FindFirstSessions_session_tagsArgs } from "./args/FindFirstSessions_session_tagsArgs";
import { FindManySessions_session_tagsArgs } from "./args/FindManySessions_session_tagsArgs";
import { FindUniqueSessions_session_tagsArgs } from "./args/FindUniqueSessions_session_tagsArgs";
import { GroupBySessions_session_tagsArgs } from "./args/GroupBySessions_session_tagsArgs";
import { UpdateManySessions_session_tagsArgs } from "./args/UpdateManySessions_session_tagsArgs";
import { UpdateSessions_session_tagsArgs } from "./args/UpdateSessions_session_tagsArgs";
import { UpsertSessions_session_tagsArgs } from "./args/UpsertSessions_session_tagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSessions_session_tags } from "../../outputs/AggregateSessions_session_tags";
import { Sessions_session_tagsGroupBy } from "../../outputs/Sessions_session_tagsGroupBy";

@TypeGraphQL.Resolver(_of => Sessions_session_tags)
export class Sessions_session_tagsCrudResolver {
  @TypeGraphQL.Query(_returns => Sessions_session_tags, {
    nullable: true
  })
  async findUniqueSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSessions_session_tagsArgs): Promise<Sessions_session_tags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Sessions_session_tags, {
    nullable: true
  })
  async findFirstSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSessions_session_tagsArgs): Promise<Sessions_session_tags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Sessions_session_tags], {
    nullable: false
  })
  async findManySessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySessions_session_tagsArgs): Promise<Sessions_session_tags[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Sessions_session_tags, {
    nullable: false
  })
  async createSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSessions_session_tagsArgs): Promise<Sessions_session_tags> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySessions_session_tagsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Sessions_session_tags, {
    nullable: true
  })
  async deleteSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSessions_session_tagsArgs): Promise<Sessions_session_tags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Sessions_session_tags, {
    nullable: true
  })
  async updateSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSessions_session_tagsArgs): Promise<Sessions_session_tags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySessions_session_tagsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySessions_session_tagsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Sessions_session_tags, {
    nullable: false
  })
  async upsertSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSessions_session_tagsArgs): Promise<Sessions_session_tags> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateSessions_session_tags, {
    nullable: false
  })
  async aggregateSessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSessions_session_tagsArgs): Promise<AggregateSessions_session_tags> {
    return getPrismaFromContext(ctx).sessions_session_tags.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
