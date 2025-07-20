package com.edtech.service;

import com.edtech.model.Course;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private List<Course> courses = new ArrayList<>();

    public List<Course> findAll() {
        return courses;
    }

    public Optional<Course> findById(Long id) {
        return courses.stream().filter(course -> course.getId().equals(id)).findFirst();
    }

    public Course save(Course course) {
        courses.add(course);
        return course;
    }

    public Course update(Long id, Course course) {
        Course existingCourse = findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
        existingCourse.setTitle(course.getTitle());
        existingCourse.setDescription(course.getDescription());
        existingCourse.setDuration(course.getDuration());
        return existingCourse;
    }

    public void delete(Long id) {
        Course course = findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
        courses.remove(course);
    }
}