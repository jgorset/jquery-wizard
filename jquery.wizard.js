(function($){
    
    jQuery.fn.wizard = function(options){
        
        return this.each(function(){
            var self = this
            
            // Default options
            options                         = options || {}
            options.initial_step            = options.initial_step || 1
            options.labels                  = options.labels || {}
            options.labels.next_step        = options.labels.next_step || 'Next step'
            options.labels.previous_step    = options.labels.previous_step || 'Previous step'
            options.animations              = options.animations || {}
            options.animations.next         = options.animations.next || animate
            options.animations.previous     = options.animations.previous || animate
            
            
            var $fieldsets = $(this).children('fieldset')
            var $current_fieldset = $fieldsets.eq(options.initial_step - 1)
            
            function initialize(){
                
                $(self).find('input[type=submit]').before(
                    $('<input />', {
                        'type': 'button',
                        'value': options.labels.previous_step,
                        'id': 'previous_step',
                        'click': previous
                    }),
                    $('<input />', {
                        'type': 'button',
                        'value': options.labels.next_step,
                        'id': 'next_step',
                        'click': next
                    }),
                    $('<div id="steps" />')
                )
                
                $(self).children('fieldset').each(function(index, element){
                    
                    $(self).find('#steps').append(
                        $('<div />', {
                            'class': 'step',
                            'id': 'step_' + (index + 1),
                            'text': $(element).find('legend').text()
                        })
                    )
                    
                })
                
                $fieldsets.not($current_fieldset).hide()
                
                synchronize_navigation()
                synchronize_steps()
            }
            
            function go(target_step){
                $target_fieldset = $fieldsets.eq(target_step - 1)
                
                if($target_fieldset.index() < $current_fieldset.index()){
                    options.animations.previous($current_fieldset, $target_fieldset)
                }else{
                    options.animations.next($current_fieldset, $target_fieldset)
                }
                
                $current_fieldset = $target_fieldset
                
                synchronize_navigation()
                synchronize_steps()
            }
            
            function previous(){
                $previous_fieldset = $current_fieldset.prev('fieldset')
                
                if($previous_fieldset){
                    options.animations.previous($current_fieldset, $previous_fieldset)
                    $current_fieldset = $previous_fieldset
                }

                synchronize_navigation()
                synchronize_steps()
            }
            
            function next(){
                $next_fieldset = $current_fieldset.next('fieldset')
                
                if($next_fieldset){
                    options.animations.next($current_fieldset, $next_fieldset)
                    $current_fieldset = $next_fieldset
                }

                synchronize_navigation()
                synchronize_steps()
            }
            
            function animate(old_fieldset, new_fieldset){
                old_fieldset.hide()
                new_fieldset.show()
            }
            
            function synchronize_navigation(){
                $next_fieldset = $current_fieldset.next('fieldset')
                $previous_fieldset = $current_fieldset.prev('fieldset')
                
                if($previous_fieldset.length){
                    $(self).find('#previous_step').show()
                }else{
                    $(self).find('#previous_step').hide()
                }
                
                if($next_fieldset.length){
                    $(self).find('#next_step').show()
                    $(self).find('input[type=submit]').hide()
                }else{
                    $(self).find('#next_step').hide()
                    $(self).find('input[type=submit]').show()
                }
            
            }
            
            function synchronize_steps(){
                $(self).find('#steps .step.current').removeClass('current')
                $(self).find('#steps .step:eq(' + $fieldsets.index($current_fieldset) + ')').addClass('current')
            }
            
            initialize()

        })
    }
})(jQuery)