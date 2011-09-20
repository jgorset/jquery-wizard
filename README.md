# jQuery Wizard

## About

jQuery Wizard turns your forms into beautiful wizards without cluttering your markup.

## Usage

    <!DOCTYPE html>
    
    <html>
        <head>
        
            <script type="text/javascript" src="jquery.wizard.js"></script>
            <script type="text/javascript">
            
                $(document).ready(function(){
                    $('form').wizard()  
                })
                
            </script>
            
        </head>
        <body>
        
            <form method="POST">
                <fieldset>
                    <legend>Personal information</legend>
                    
                    <label>Full name</label>
                    <input type="text" name="name" />
                    
                    <label>Age</label>
                    <input type="text" name="age" />
                </fieldset>
                
                <fieldset>
                    <legend>Random information</legend>
                    
                    <label>Something</label>
                    <input type="text" name="something" />
                
                    <label>Anything</label>
                    <input type="text" name="anything" />
                </fieldset>
                
                
                <input type="submit" value="Submit" />
            </form>
            
        </body>
    </html>
    
## Options

The wizard may be customized by passing an object with any of the following properties to the `wizard()` function.

* `element` - A string or element describing the element to be paged. Defaults to 'fieldset'.
* `initialStep` - An integer describing which step the wizard should display initially. Defaults to 1.
* `labels` - An object with properties `next` and `previous`, whose values should be strings describing what the labels
  of the next and previous-buttons should read, respectively. Defaults to 'Next' and 'Previous'.
* `animations` - An object with properties `next` and `previous`, whose values should be functions describing the
  transitions between steps. These functions are passed two arguments; the element being hidden, and the element
  being shown.

#### Example

    $('form).wizard({
        initialStep: 2,
        labels: {
            next: "I'm done, let's go!",
            previous: "Wait a minute..."
        },
        animations: {
            next: function(x, y){
                $(x).hide()
                $(y).show()
            },
            previous: function(x, y){
                $(x).hide()
                $(y).show()
            }
        }
    })

## Requirements

jQuery 1.4.x
        
