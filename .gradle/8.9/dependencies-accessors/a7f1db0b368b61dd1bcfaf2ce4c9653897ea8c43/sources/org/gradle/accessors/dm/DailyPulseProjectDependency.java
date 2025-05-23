package org.gradle.accessors.dm;

import org.gradle.api.NonNullApi;
import org.gradle.api.artifacts.ProjectDependency;
import org.gradle.api.internal.artifacts.dependencies.ProjectDependencyInternal;
import org.gradle.api.internal.artifacts.DefaultProjectDependencyFactory;
import org.gradle.api.internal.artifacts.dsl.dependencies.ProjectFinder;
import org.gradle.api.internal.catalog.DelegatingProjectDependency;
import org.gradle.api.internal.catalog.TypeSafeProjectDependencyFactory;
import javax.inject.Inject;

@NonNullApi
public class DailyPulseProjectDependency extends DelegatingProjectDependency {

    @Inject
    public DailyPulseProjectDependency(TypeSafeProjectDependencyFactory factory, ProjectDependencyInternal delegate) {
        super(factory, delegate);
    }

    /**
     * Creates a project dependency on the project at path ":androidApp"
     */
    public AndroidAppProjectDependency getAndroidApp() { return new AndroidAppProjectDependency(getFactory(), create(":androidApp")); }

    /**
     * Creates a project dependency on the project at path ":shared"
     */
    public SharedProjectDependency getShared() { return new SharedProjectDependency(getFactory(), create(":shared")); }

    /**
     * Creates a project dependency on the project at path ":site"
     */
    public SiteProjectDependency getSite() { return new SiteProjectDependency(getFactory(), create(":site")); }

    /**
     * Creates a project dependency on the project at path ":worker"
     */
    public WorkerProjectDependency getWorker() { return new WorkerProjectDependency(getFactory(), create(":worker")); }

}
