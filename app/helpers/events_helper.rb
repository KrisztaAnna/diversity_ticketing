module EventsHelper

  def event_image(event)
    if event.logo && event.logo != ''
      image_tag event.logo, skip_pipeline: true
    else
      image_tag "event-default.png"
    end
  end

  #Currently not used - Left it for further refactoring, maybe we can
  #reuse this later if we modify it for the breadcrumb_partial:

  # def breadcrumb_link_according_to_user_status
  #   if current_user && @event.organizer_id == current_user.id
  #     link_to 'Your Events', user_path(current_user)
  #   elsif current_user && current_user.admin?
  #     link_to 'Admin', admin_path
  #   else
  #     link_to 'Events', events_path
  #   end
  # end

end
