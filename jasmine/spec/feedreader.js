/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


         it('have URLs and they are defined', function(){
          console.log(allFeeds.length);
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toBeTruthy();
            }


         });



         it('have names and they are defined', function(){
              for(var i = 0; i < allFeeds.length; i++){
                   expect(allFeeds[i].name).toBeDefined();
                   expect(allFeeds[i].name).toBeTruthy();
              }
            })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         var feedBody = document.body;
         it('hidden by default', function() {
           expect(feedBody.className).toContain('menu-hidden');
       });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          var menuIcon = $('.menu-icon-link');
          var hiddenClass = 'menu-hidden';
          it('is displayed when the menu icon is clicked',function(){
               /* simulate a click */
                menuIcon.click();
                 expect($('body').hasClass(hiddenClass)).toBe(false);;
            });

           it('is hidden when the menu icon is clicked again ',function(){
           /* simulate a second click */
               menuIcon.click();
                 expect($('body').hasClass(hiddenClass)).toBe(true);;
            });
          });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

              beforeEach(function(done) {
                  loadFeed(0, function() {
                      done();
                  });
              });

              it('loadFeed Entries ', function() {
                  expect($('.feed .entry').length).not.toBe(0);
              });
          });
    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
             var firstLoad;
             var secondLoad;

             /* Runs LoadFeed asynchronously because all data needs to be
              * obtained from Google API before the test can be run.

            */
             beforeEach(function(done) {
               loadFeed(0, function() {
                 /* Gets the content of the initial feed */
                 firstLoad = $('.feed').html();
                 loadFeed(1, function() {
                   /* Gets the contents of the second feed load */
                   secondLoad = $('.feed').html();
                   done();
                 });
               });
             });

             /* A test that ensures when a new feed is loaded
              * by the loadFeed function that the content actually changes.
              */
             it('actually changes the content', function(done) {
               /* Checks the feed loads to make sure both actually have content
                * to be compared against
                */
               expect(firstLoad).not.toBe(undefined);
               expect(secondLoad).not.toBe(undefined);
               /* Checks the first and second feed uploaded and compares to see if
                * different, or updated compared to the previous feed
                */
               expect(firstLoad == secondLoad).toBe(false);
               done();
             });
           });
       }());
