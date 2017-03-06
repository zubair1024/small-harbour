angular.module('starter.controllers', [])
    .controller('AppCtrl', function ($scope, WC) {
        var Woocommerce = WC.WC();

        /**
         * Get WooCommerce categories
         */
        Woocommerce.get('products/categories', function (err, data, res) {
            if (err) {
                console.log(err);
            } else {
                $scope.categories = JSON.parse(res).product_categories;

                $scope.mainCategories = [];

                $scope.categories.forEach(function (element, index) {
                    if (element.parent == 0) {
                        $scope.mainCategories.push(element);
                    }
                });
            }
        });
    })

    .controller('HomeCtrl', function () {

    })

    .controller('BrowseCtrl', function ($scope, WC) {
        console.log('Browse Controller');
        var Woocommerce = WC.WC();

        $scope.getProducts = function () {
            Woocommerce.get('products', function (err, data, res) {
                if (err) {
                    console.log(err);
                } else {
                    $scope.products = JSON.parse(res).products;
                }
            });
        }

        $scope.getProducts();
    })