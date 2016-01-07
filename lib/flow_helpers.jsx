let pathFor = ( path, params ) => {
    //console.log( params );

    let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
    return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
    return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
    FlowRouter.watchPathChange();
    return FlowRouter.current().route.name === route ? 'active' : '';
};

let go2 = (pathDef, fields, queryParam) => {
        FlowRouter.redirect(FlowRouter.path(pathDef, fields, queryParam));

}
FlowHelpers = {
    pathFor: pathFor,
    urlFor: urlFor,
    currentRoute: currentRoute,
    go2: go2
};