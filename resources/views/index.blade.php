<!DOCTYPE html>
<html ng-app="starter">
<head>
    <title>Starter - Laravel & AngularJS</title>

    <link href="{{ URL::to('resources/build/css/app.css') }}" rel="stylesheet" type="text/css">

    <style>
        html, body {
            height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100%;
            display: table;
            font-weight: 100;
            font-family: 'Lato';
        }

        .container {
            text-align: center;
            display: table-cell;
            vertical-align: middle;
        }

        .content {
            text-align: center;
            display: inline-block;
        }

        .title {
            font-size: 96px;
        }
    </style>
</head>
<body>
<div class="container" ng-controller="MainCtrl">
    <div class="content">
        <div class="view page page-home" ng-view></div>
    </div>
</div>

<!-- Angular Init Here -->
<script src="{{ URL::to('resources/build/js/components.js') }}"></script>

<!-- App JS Files - All Controllers -->
<script src="{{ URL::to('resources/angular/js/application.js') }}"></script>
<script src="{{ URL::to('resources/angular/js/MainController.js') }}"></script>

</body>
</html>
