module.exports = FilterPostSortingOptionsDirective;

FilterPostSortingOptionsDirective.$inject = [
    'moment',
    '$rootScope',
    '_'
];
function FilterPostSortingOptionsDirective(moment, $rootScope, _) {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {},
        template: require('./filter-post-sorting-options.html'),
        link: PostSortingOptionsLink
    };
    function PostSortingOptionsLink($scope, $element, $attrs, ngModel) {
        $scope.orderValue = {
            value: 'created',
            labelTranslateKey: 'global_filter.sort.orderBy.filter_type_tag'
        };
        $scope.orderByOptions = {
            value: 'created',
            labelTranslateKey: 'global_filter.sort.orderBy.filter_type_tag',
            options: [
                {
                    value: 'post_date',
                    labelTranslateKey: 'global_filter.sort.orderBy.post_date'
                },
                {
                    value: 'updated',
                    labelTranslateKey: 'global_filter.sort.orderBy.updated'
                },
                {
                    value: 'created',
                    labelTranslateKey: 'global_filter.sort.orderBy.created'
                }
            ]
        };
        $scope.$watch('orderValue', saveToView, true);
        function saveToView(orderGroup) {
            /** @DEVNOTE  this is not something we should need.
             * We should be consistently getting the same type here. FIX FIX FIX before we merge
            **/
            if (_.isUndefined(orderGroup.value)) {
                orderGroup = {value: orderGroup};
            }
            ngModel.$setViewValue(angular.copy(orderGroup.value));
        }
    }
}
