/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {



    var ListInstructorsController = function ($scope, Instructors) {
        Instructors.find({})
                .$promise
                .then(function (data) {
                    $scope.instructors = data;
                    console.log(data)
                })
    };
    ListInstructorsController.$inject = ['$scope', "Instructor"];

    var ShowInstructorsController = function ($scope, $stateParams, Instructors,Course) {
        console.log($stateParams)
        $scope.instructor = $stateParams.instructor;


        function loadCourses()
        {
            Course.find({
                where:{
                    instructorId:$scope.instructor.id
                },
                limit:1
            }).$promise.then(function(data){
                $scope.courses=data;
            });
        }
        function init() {
            if (!$scope.instructor)
            {
                Instructors.find({
                    where: {
                        id: $stateParams.id
                    }
                }).$promise.then(function (data) {
                    $scope.instructor = data;
                    loadCourses();
                })
            }else
            {
                loadCourses();
            }
        }
        init()

    };
    ShowInstructorsController.$inject = ['$scope', '$stateParams', "Instructor","Course"];

    module
            .controller('ListInstructorsController', ListInstructorsController)
            .controller('ShowInstructorsController', ShowInstructorsController);
})(angular.module('jg.marlininternacional.instructors'));