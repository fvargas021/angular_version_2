(function(){

  angular
       .module('news')
       .controller('NewController', [
          'newService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          NewController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function NewController( newService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected     = null;
    self.news        = [ ];
    self.selectNew   = selectNew;
    self.toggleList   = toggleNewsList;
    self.makeContact  = makeContact;

    // Load all registered news
    fillData(); 

    /*
    newService
          .loadAllUsers()
          .then( function( news ) {
            self.news    = [].concat(news);
            self.selected = news[0];
          });
    */
    

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Fill data for index
     */
    function fillData() {
      var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
      url += '?' + $.param({
        'api-key': "4a83c1e959404fa195960a3d768132fa"
      });
      $.ajax({
          async: false,
          url: url,
          method: 'GET',
          }).done(function(result) {
              self.news    = [].concat(result.results);
              self.selected = result.results[0];
              console.log(self.news);
          }).fail(function(err) {
              throw err;
      });
    }

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleNewsList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectNew ( news ) {
      self.selected = angular.isNumber(news) ? $scope.news[news] : news;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedNew) {

        $mdBottomSheet.show({
          controllerAs  : "vm",
          templateUrl   : './src/users/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.new = selectedNew;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
