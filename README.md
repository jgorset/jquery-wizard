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

* `initial_step` - An integer describing which step the wizard should display initially.
* `labels.next_step` - A string describing what the 'next step'-button should read (defaults to 'Next step').
* `labels.previous_step` - A string describing what the 'previous step'-button should read (defaults to 'Previous step').
* `animations.next` - A function that defines the 'next' animation. The function is passed two parameters; the current fieldset and the next fieldset.
* `animations.previous` - A function that defines the 'previous' animation. The function is passed two parameters; the current fieldset and the previous fieldset.

#### Example

    $('form).wizard({
        labels: {
            next_step: 'Next',
            previous_step: 'Previous'
        },
        animations: {
            next: function(old_fieldset, new_fieldset){
                old_fieldset.hide()
                new_fieldset.show()
            },
            previous: function(old_fieldset, new_fieldset){
                old_fieldset.hide()
                new_fieldset.show()
            }
        }
    })

## Requirements

jQuery 1.4.x
        
