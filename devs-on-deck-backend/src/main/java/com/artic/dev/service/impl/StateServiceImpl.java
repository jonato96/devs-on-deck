package com.artic.dev.service.impl;

import com.artic.dev.dto.StateResponseDto;
import com.artic.dev.entity.State;
import com.artic.dev.repository.StateRepository;
import com.artic.dev.service.StateService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StateServiceImpl implements StateService {

    private final StateRepository stateRepository;

    @Override
    public List<StateResponseDto> findAll() {
        List<State> states =  this.stateRepository.findAll();
        return states.stream().map(state -> StateResponseDto.builder()
                .id(state.getId())
                .name(state.getName())
                .build()
        ).toList();

    }
}
