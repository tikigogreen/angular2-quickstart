import {Component} from 'angular2/core';

// @Component decorator
// Component is a decorator function that takes a metadata object. The metadata tell Angular how to create and use this component.
// We apply this function to the component class by prefixing the function with the @ symbol and invoking it with
// the metadata objectjust above the class: This particular metadata object has two fields, a selector and a template.
// A more advanced template could contain data bindings to component properties and might identify other application components
// which have their own templates. These templates might identify yet other components.
// In this way an Angular application becomes a tree of components.
@Component({
    selector: 'my-app',
    template: '<h1>Tiki First Angular 2 App</h1>'
})

// Every Angular app has at least one root component, conventionally named AppComponent, that hosts the client user experience.
// Components are the basic building blocks of Angular applications.
// A component controls a portion of the screen — a view — through its associated template.
// We export AppComponent so that we can import it elsewhere in our application
export class AppComponent { }
