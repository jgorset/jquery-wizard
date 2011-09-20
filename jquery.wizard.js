(function($){

    jQuery.fn.wizard = function(options){

        options = $.extend({
            element: 'fieldset',
            initialStep: 1,
            labels: {
                next: 'Next',
                previous: 'Previous'
            },
            animations: {
                next: function(x, y){
                    x.hide()
                    y.show()
                },
                previous: function(x, y){
                    x.hide()
                    y.show()
                }
            }
        }, options)

        return this.each(function(index, form){
            var form = $(form)
            
            var steps = $(options.element, form)
            var currentStep = steps.eq(options.initialStep - 1)
            
            steps.hide()
            currentStep.show()
            
            var elements = {
                previous: $('<input />', {
                    'type': 'button',
                    'value': options.labels.previous,
                    'class': 'previous',
                    'click': function(event){
                        var previousStep = currentStep.prev(options.element)

                        if(previousStep.length > 0){
                            options.animations.previous(currentStep, previousStep)
                            currentStep = previousStep
                        }

                        render()
                    }
                }),
                next: $('<input />', {
                    'type': 'button',
                    'value': options.labels.next,
                    'class': 'next',
                    'click': function(event){
                        var nextStep = currentStep.next(options.element)

                        if(nextStep.length > 0){
                            options.animations.next(currentStep, nextStep)
                            currentStep = nextStep
                        }

                        render()
                    }
                }),
                steps: $('<div />', {
                    'id': 'steps'
                })
            }

            form.find('input[type=submit]').before(elements.next, elements.previous, elements.steps)

            $(steps).each(function(index, step){
                var step = $(step)

                form.find('#steps').append(
                    $('<div />', {
                        'id': 'step-' + (index + 1),
                        'class': 'step',
                        'text': step.find('legend').text()
                    })
                )

            })

            function render(){
                var previousStep = currentStep.prev(options.element)
                var nextStep = currentStep.next(options.element)

                if(previousStep.length > 0){
                    elements.previous.show()
                }else{
                    elements.previous.hide()
                }

                if(nextStep.length > 0){
                    elements.next.show()
                    form.find('input[type=submit]').hide()
                }else{
                    elements.next.hide()
                    form.find('input[type=submit]').show()
                }


                elements.steps.find('.step').removeClass('completed')
                elements.steps.find('.current').removeClass('current')
                elements.steps.find('.step:eq(' + steps.index(currentStep) + ')').addClass('current')
                elements.steps.find('.current').prevAll().addClass('completed')
            }
            
            render()

        })
    }

})(jQuery)
