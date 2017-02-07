/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

    var headerSources = {
        "original": "assets/images/cursos/banner.jpg",
        "thumb_small": "assets/images/cursos/banner.jpg",
        "thumb_medium": "assets/images/cursos/banner.jpg",
        "thumb_large": "assets/images/cursos/banner.jpg",
        "small": "assets/images/cursos/banner.jpg",
        "medium": "assets/images/cursos/banner.jpg",
        "large": "assets/images/cursos/banner.jpg"
    };

    ListCourseController.$inject = ['$scope', 'Course', "$state"];
    function ListCourseController($scope, Course, $state) {

        $scope.optorderby = null;
        $scope.asc = true;
        $scope.submitRequest = {};
        $scope.togleAsc = function () {
            $scope.asc = !$scope.asc;
        }
        $scope.loadCourses = function () {
            $scope.loading = true;
            var order = "name "
            if ($scope.optorderby > 0)
            {
                if ($scope.optorderby == 1)
                {
                    order = "name "
                } else if ($scope.optorderby == 2)
                {
                    order = "price "
                }
            }
            order += ($scope.asc ? "ASC" : "DESC")

            Course.find({
                filter: {
                    where: {isPublished: true},
                    order: order,
                    include: 'instructor'
                }
            }).$promise.then(function (data) {

                data = data.map(function (v) {
                    v.descriptionCaption = v.description.substr(0, 150) + ("...");
                    return v;
                })
                $scope.courses = data
                $scope.coursesOpt = data.map(function (v) {
                    return {name: v.name, id: v.id}
                })
                $scope.submitRequest.course = $scope.coursesOpt[0];
                $scope.loading = false;

            });
        }

        $scope.headerSources = headerSources;
        $scope.loadCourses();
        $scope.showCourse = function (course)
        {

            $state.go("courses.show", {title: course.name, courseId: course.id, course: course})
        }

    }

    ShowCourseController.$inject = ['$scope', '$stateParams', '$location', 'Course',"ngDialog"];
    function ShowCourseController($scope, $stateParams, $location, Course,ngDialog) {
        $scope.headerSources = headerSources;
        $scope.location = $location.absUrl();
        $scope.modulos = [];
        $scope.loading = true;

        function close_accordion_section() {
            $('.accordion .accordion-section-title').removeClass('active');
            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        }
        function init_accordion() {
            $('.accordion-section-title').on("click", function (e) {
                // Grab current anchor value
                var currentAttrValue = $(this).attr('href');

                if ($(e.target).is('.active')) {
                    close_accordion_section();
                } else {
                    close_accordion_section();

                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                }
                e.preventDefault();
            });
        }

        function sortModules() {

            for (var i = 0; i < $scope.course.moduleList.length; i = i + 4)
            {

                $scope.modulos.push($scope.course.moduleList.slice(i, i + 4))
            }

        }
        function init() {
            for (var i = 0; i < 12; i++)
            {
                $scope.course.moduleList.push({
                    name: "Lorem ipsum dolor sit amet",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    videoList: [
                        {title: "Video 1"},
                        {title: "Video 2"},
                        {title: "Video 3"},
                        {title: "Video 4"},
                        {title: "Video 5"},
                        {title: "Video 6"},
                    ]})
            }
            sortModules();

            $scope.loading = false;
        }

        $scope.callback = function () {
            init_accordion();
        }
        $scope.showVideo = function (video)
        {
            var controller=function($scope,$element){
                $scope.x=[1,2,3,4,5,6,7,8,9,10,11,12]
                $scope.callbackvideo=function(){
                    var aux=document.getElementById("commentsVideoContainer");
                    aux.scrollTop = aux.scrollHeight;
                }
            }
            controller.$inject=["$scope","$element"]
            
            ngDialog.open({
                template: 'modules/courses/templates/modals/video.html',
                className: 'ngdialog-theme-default videoModal',
                controller: controller
            })
        }
        $scope.loadCourse = function () {

            Course.findOne({
                filter: {
                    where: {isPublished: true, id: $stateParams.courseId},
                    include: 'instructor'
                }
            }).$promise.then(function (data) {
                $scope.course = data;

                init();
            })
        }


        if (!$stateParams.course)
        {
            $scope.loadCourse();
        } else
        {
            $scope.course = $stateParams.course;
            init();
        }
        console.log($scope.course)
        function initAccordion() {

        }




    }
    module.controller('ListCourseController', ListCourseController)
            .controller('ShowCourseController', ShowCourseController);
})(angular.module('jg.marlininternacional.news'));
